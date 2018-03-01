export class Credentials {

  // example: 900150983cd24fb0d6963f7d28e17f72
  // The user response token provided by reCAPTCHA, verifying the user on your site.
  // https://developers.google.com/recaptcha/docs/verify
  captcha: string;

  // example: jon.doe@example.com
  // The username
  username: string;

  // example: 48be9724df98670e7c5297f8167ad7b7
  // The user's password (md5-hashed)}
  password_md5: string;
}
