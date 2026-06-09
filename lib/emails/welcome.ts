interface BuiltEmail {
  subject: string
  html: string
  text: string
}

const SITE_URL = "https://www.vemosvamos.com"
const INSTAGRAM_URL = "https://www.instagram.com/vemos.vamos/"
const LINKEDIN_URL = "https://www.linkedin.com/company/vemosvamos/"
const FACEBOOK_URL = "https://www.facebook.com/vemosvamos"

export function buildWelcomeEmail(): BuiltEmail {
  const subject = "Estás dentro · You're in"

  const html = `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Welcome to Vemos Vamos</title>
</head>
<body style="margin:0;padding:0;background-color:#eeebe3;font-family:Georgia,'Times New Roman',serif;color:#0d1f2d;-webkit-font-smoothing:antialiased;">
  <!-- Preheader (hidden) -->
  <div style="display:none;max-height:0;overflow:hidden;font-size:1px;line-height:1px;color:#eeebe3;opacity:0;">
    Acciones hablan más fuerte. The system is on.
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#eeebe3;">
    <tr>
      <td align="center" style="padding:48px 16px;">
        <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="max-width:560px;background-color:#ffffff;">

          <!-- Header -->
          <tr>
            <td style="padding:48px 40px 8px 40px;">
              <p style="margin:0 0 28px 0;font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:bold;letter-spacing:0.22em;text-transform:uppercase;color:#ca0013;">
                A bicultural creative media system
              </p>
              <h1 style="margin:0 0 12px 0;font-family:Georgia,'Times New Roman',serif;font-size:40px;line-height:1.0;color:#0d1f2d;font-weight:900;letter-spacing:-0.02em;">
                You're in.
              </h1>
              <p style="margin:0 0 24px 0;font-family:Georgia,'Times New Roman',serif;font-size:18px;line-height:1.2;color:#0d1f2d;">
                Acciones hablan más fuerte.
              </p>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:0 40px 32px 40px;">
              <p style="margin:0 0 16px 0;font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:1.55;color:#0d1f2d;">
                Thanks for being early. The system is on.
              </p>
              <p style="margin:0 0 16px 0;font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:1.55;color:#0d1f2d;">
                Vemos Vamos is a bicultural creative media system. We read the cultural signal, propose the angle, draft the copy &mdash; across Cultural Signals, Creative Systems, Builder Stories, Between Worlds, and Action Notes.
              </p>
              <p style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:16px;line-height:1.55;color:#0d1f2d;">
                When the next post lands, you'll see it first.
              </p>
            </td>
          </tr>

          <!-- Divider -->
          <tr>
            <td style="padding:0 40px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                <tr>
                  <td style="border-top:1px solid #e5e1d6;height:1px;font-size:1px;line-height:1px;">&nbsp;</td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Operating triplet -->
          <tr>
            <td style="padding:24px 40px 12px 40px;">
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:10px;font-weight:bold;letter-spacing:0.22em;text-transform:uppercase;color:#1a2a5c;">
                See the signal &middot; Shape the story &middot; Move the market
              </p>
            </td>
          </tr>

          <!-- Colophon -->
          <tr>
            <td style="padding:0 40px 40px 40px;">
              <p style="margin:0 0 8px 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#0d1f2d;">
                Vemos Vamos &middot; A 434 Media studio
              </p>
              <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;color:#666666;">
                <a href="${SITE_URL}" style="color:#1a2a5c;text-decoration:none;">vemosvamos.com</a>
                &nbsp;&middot;&nbsp;
                <a href="${INSTAGRAM_URL}" style="color:#1a2a5c;text-decoration:none;">Instagram</a>
                &nbsp;&middot;&nbsp;
                <a href="${LINKEDIN_URL}" style="color:#1a2a5c;text-decoration:none;">LinkedIn</a>
                &nbsp;&middot;&nbsp;
                <a href="${FACEBOOK_URL}" style="color:#1a2a5c;text-decoration:none;">Facebook</a>
              </p>
            </td>
          </tr>
        </table>

        <p style="margin:20px 0 0 0;font-family:Arial,Helvetica,sans-serif;font-size:11px;color:#0d1f2d;opacity:0.5;text-align:center;">
          You're receiving this because you subscribed at vemosvamos.com.
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`

  const text = `A BICULTURAL CREATIVE MEDIA SYSTEM

You're in.
Acciones hablan más fuerte.

Thanks for being early. The system is on.

Vemos Vamos is a bicultural creative media system. We read the cultural signal, propose the angle, draft the copy — across Cultural Signals, Creative Systems, Builder Stories, Between Worlds, and Action Notes.

When the next post lands, you'll see it first.

SEE THE SIGNAL · SHAPE THE STORY · MOVE THE MARKET

—
Vemos Vamos · A 434 Media studio
${SITE_URL}
Instagram: ${INSTAGRAM_URL}
LinkedIn: ${LINKEDIN_URL}
Facebook: ${FACEBOOK_URL}

You're receiving this because you subscribed at vemosvamos.com.`

  return { subject, html, text }
}
