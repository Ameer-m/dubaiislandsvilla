import nodemailer from "nodemailer";
import axios from "axios";
import { URL } from "url"; 

export async function POST(req) {
  try {
    const rawBody = await req.text();
    console.log("Raw request body:", rawBody);
    const body = JSON.parse(rawBody);

    let { fname, lname, email, full_phone_number, pageUrl } = body;

    console.log("Received data:", { fname, lname, email, full_phone_number, pageUrl });

    if (!fname || !email || !full_phone_number) {
      return new Response(JSON.stringify({ error: "All fields are required" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    // **Extract query parameters from the `pageUrl`**
    const queryParams = {};
    if (pageUrl) {
      const urlObj = new URL(pageUrl);
      urlObj.searchParams.forEach((value, key) => {
        queryParams[key] = value;
      });
    }

    // Extracted UTM parameters
    const utm_source = queryParams.utm_source || "";
    const campaign_id = queryParams.campaign_id || "";
    const property_id = queryParams.property_id || "";

    console.log("Extracted Query Params:", queryParams);

    // UTM Source Mapping
    let mediatype, medianame;
    switch (utm_source) {
      case "newsletter":
        mediatype = 166277;
        medianame = 166071;
        break;
      case "sms":
        mediatype = 129474;
        medianame = 129200;
        break;
      case "google":
        mediatype = 167218;
        medianame = 128727;
        break;
      case "google_adwords_banner":
      case "google_adwords":
      case "google_adword":
      case "google_ads":
        mediatype = 167218;
        medianame = 128455;
        break;
      case "snapchat":
        mediatype = 165269;
        medianame = 166858;
        break;
      case "facebook":
        mediatype = 165269;
        medianame = 131010;
        break;
      case "blog":
        mediatype = 167313;
        medianame = 167314;
        break;
      case "instagram":
        mediatype = 165269;
        medianame = 166728;
        break;
      case "linkedin":
        mediatype = 165269;
        medianame = 165070;
        break;
      case "whatsapp":
        mediatype = 165269;
        medianame = 166453;
        break;
      case "youtube":
        mediatype = 165269;
        medianame = 166053;
        break;
      default:
        mediatype = 129475;
        medianame = 70128;
        break;
    }

    const activityRemarks = `
          Name: ${fname} ${lname}
          Email: ${email}
          Phone: ${full_phone_number}
          Page URL: ${pageUrl}`
          .trim();

    // CRM API URL
    const apiUrl = `https://api.portal.dubai-crm.com/leads/query/create?TitleID=129929&IsForAutoRotation=false&FirstName=${encodeURIComponent(
      fname
    )}&FamilyName=${encodeURIComponent(
      lname
    )}&MobileCountryCode=0&MobileAreaCode=0&MobilePhone=${encodeURIComponent(
      full_phone_number
    )}&TelephoneCountryCode=na&TelephoneAreaCode=na&Telephone=na&Email=${encodeURIComponent(
      email
    )}&NationalityID=65946&Remarks=${encodeURIComponent(
      `Submitted from: ${pageUrl}`
    )}&RequirementType=91212&ContactType=3&CountryID=65946&StateID=91578&CityID=91578&DistrictID=&CommunityID=&SubCommunityID&PropertyID=${property_id}&UnitType=19&PropertyCampaignId=${campaign_id}&LanguageID=115915&MethodOfContact=115747&MediaType=${mediatype}&MediaName=${medianame}&Bedroom=&Bathroom=&Budget=&Budget2=&RequirementCountryID=65946&ReferredToID=4421&ReferredByID=4421&IsBulkUpload=false&ActivityAssignedTo=4421&ActivityDate=&ActivityTypeId=167234&ActivitySubject=Email%20Inquiry%20Copy&ActivityRemarks=${activityRemarks}&Phone=&APIKey=d301dba69732065cd006f90c6056b279fe05d9671beb6d29f2d9deb0206888c38239a3257ccdf4d0`;

    // Send request to CRM
    const response = await axios.get(apiUrl);
    const data = response.data;

    if (data.status !== "Success") {
      return new Response(JSON.stringify({ error: "Failed to submit form", details: data }), {
        status: 500,
        headers: { "Content-Type": "application/json" },
      });
    }

    // Setup Nodemailer
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "psirealestate2@gmail.com",
        pass: "xlezpdtnpctnfbjm",
      },
    });

    // Email Content
    const mailOptions = {
      from: "PSI Real Estate <psirealestate2@gmail.com>",
      to: "callcenter@psidubai.com",
      cc: ["ameer.k@psidubai.com", "akshayb@psidubai.com"],
      subject: "New Inquiry - PSI Real Estate",
      html: `
      <!DOCTYPE html>
        <html>
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1">
          <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
          <title>New Inquiry - PSI Real Estate</title>
          <style>
            body, table, td { font-family: Arial, sans-serif !important; }
            .wrapper { width: 100%; background-color: #f4f4f4; padding: 20px 0; }
            .email-container { max-width: 600px; background-color: #ffffff; border-radius: 8px; }
            .header { background-color: #004274; color: #ffffff; text-align: center; padding: 20px; }
            .content { padding: 20px; }
            .info-table { width: 100%; border-collapse: collapse; background-color: #f9f9f9; }
            .info-table th, .info-table td { padding: 10px; border-bottom: 1px solid #dddddd; }
            .info-table th { background-color: #004274; color: white; }
            .footer { text-align: center; padding: 15px; font-size: 14px; color: #777777; background-color: #eeeeee; }
          </style>
        </head>
        <body>
          <table class="wrapper">
            <tr>
              <td align="center">
                <table class="email-container">
                  <tr><td class="header"><h2>PSI Real Estate - New Inquiry</h2></td></tr>
                  <tr>
                    <td class="content">
                      <table class="info-table">
                        <tr><th>Name</th><td>${fname} ${lname}</td></tr>
                        <tr><th>Email</th><td>${email}</td></tr>
                        <tr><th>Phone</th><td>${full_phone_number}</td></tr>
                        <tr><th>Page URL</th><td><a href="${pageUrl}" target="_blank">${pageUrl}</a></td></tr>
                        <tr><th>UTM Source</th><td>${utm_source || "Not Provided"}</td></tr>
                      </table>
                    </td>
                  </tr>
                  <tr><td class="footer"><p>&copy; ${new Date().getFullYear()} PSI Real Estate. All rights reserved.</p></td></tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: "Form submitted & email sent successfully!" }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Internal Server Error", details: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}