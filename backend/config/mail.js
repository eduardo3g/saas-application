// config/mail.js
'use strict'

const Env = use('Env')

module.exports = {
  /*
  |--------------------------------------------------------------------------
  | Driver
  |--------------------------------------------------------------------------
  |
  | driver defines the default driver to be used for sending emails. Adonis
  | has support for 'mandrill', 'mailgun', 'smtp', 'ses' and 'log' driver.
  |
  */
  // driver: Env.get('MAIL_DRIVER', 'smtp'),
  connection: Env.get('MAIL_CONNECTION', 'smtp'),

  /*
  |--------------------------------------------------------------------------
  | SMTP
  |--------------------------------------------------------------------------
  |
  | Here we define configuration for sending emails via SMTP.
  |
  */
  smtp: {
    driver: 'smtp',
    pool: true,
    port: Env.get('MAIL_PORT'),
    host: Env.get('MAIL_HOST'),
    secure: false,
    auth: {
      user: Env.get('MAIL_USERNAME'),
      pass: Env.get('MAIL_PASSWORD')
    },
    maxConnections: 5,
    maxMessages: 100,
    rateLimit: 10
  },

  /*
  |--------------------------------------------------------------------------
  | Mandrill
  |--------------------------------------------------------------------------
  |
  | Here we define api options for mandrill. Mail provider makes use of
  | mandrill raw api, which means you cannot set email body specific
  | options like template, tracking_domain etc.
  |
  */
  mandrill: {
    apiKey: Env.get('MANDRILL_APIKEY'),
    async: false,
    ip_pool: 'Main Pool'
  },

  /*
  |--------------------------------------------------------------------------
  | Amazon SES
  |--------------------------------------------------------------------------
  |
  | Here we define api credentials for Amazon SES account. Make sure you have
  | verified your domain and email address, before you can send emails.
  |
  */
  ses: {
    accessKeyId: Env.get('SES_KEY'),
    secretAccessKey: Env.get('SES_SECRET'),
    region: 'us-east-1',
    rateLimit: 10
  },

  /*
  |--------------------------------------------------------------------------
  | MailGun
  |--------------------------------------------------------------------------
  |
  | Here we define api credentials for Amazon SES account. Make sure you have
  | verified your domain and email address, before you can send emails.
  |
  */
  mailgun: {
    domain: Env.get('MAILGUN_DOMAIN'),
    apiKey: Env.get('MAILGUN_APIKEY')
  }
}
