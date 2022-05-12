import { generateFormattedMessage } from "../../serverHelpers/helpers.js"
import { getSalesPerson } from "../../serverHelpers/leadRouting/index.js"
import url from 'url'

export default async function handler(req, res) {
//   const webhooks = {
    // kenya: 'https://hooks.slack.com/services/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',
    // kilimanjaro: 'https://hooks.slack.com/services/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',
    // tanzania: 'https://hooks.slack.com/services/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',
    // default: 'https://hooks.slack.com/services/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'
//   }
  
  
  const payload = req.body
  const webhook = payload.campaign ? webhooks[payload.campaign] : webhooks.default
  const text = generateFormattedMessage(payload)
  try {
    await fetch(webhook, {
        method: 'POST',
        body: JSON.stringify({
            text
        }),
        headers: {
            'content-type': 'application/json',
        },
    })
  } catch(e) {
    console.log('slack post message error')
    console.log(e)
  }
  const kids = payload.kids || payload.children || 0
  const adults = payload.adults || 0
  const teenagers = payload.teenagers || 0
  const infants = payload.infants || 0
  const duration = payload.duration || 0
  const salesPerson = await getSalesPerson(payload.campaign)
  console.log('assign lead to ' + salesPerson)
  const body = {
    contact: {  
      email: payload.email,
      mobile_number: payload.phoneNumber,
      country: payload.country,
      display_name: payload.name,
      owner_id: salesPerson,
      custom_field: {
        cf_full_name: payload.name,
        cf_client_name: payload.name || payload.email,
        cf_email_id: payload.email,
        cf_phone_number: payload.phoneNumber.toString(),
        cf_campaign_name: payload.campaign,
        cf_page_url: payload.page ? url.parse(payload.page).pathname : '',
        cf_adults: adults.toString(),
        cf_teenagers: teenagers.toString(),
        cf_kids: kids.toString(),
        cf_infants: infants.toString(),
        cf_travel_month: payload.season,
        cf_travel_duration: duration.toString(),
        cf_accommodation_category: payload.accommodationType &&  payload.accommodationType.value ? payload.accommodationType.value : payload.accommodationType,
        cf_trek_type: payload.trekType,
        cf_utm_keyword: payload.utmTerm || ''
      }
    }
  }
  
  try {
    const resp = await fetch(freshworks_contact_url, {
        method: 'POST',
        headers: {
            'Authorization': `Token token=${freshworks_api_key}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })
  } catch(e) {
    console.log('create contact error')
    console.log(e)
  }
  res.status(200).json({
    success: true,
    message: 'Response Submitted',
  });
}