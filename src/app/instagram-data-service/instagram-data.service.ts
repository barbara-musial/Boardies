import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InstagramAccountDetails } from './instagram-account-details';

@Injectable({
  providedIn: 'root',
})
export class InstagramDataService {
  /*
  To get ACCESS TOKEN to the data, there needs to be implemented FACEBOOK LOGIN.
  With USER ID and TEMP_ACCESS_TOKEN, fetch for User's Pages (https://graph.facebook.com/v15.0/{user-id}/accounts?access_token={access-token}) to get FB_PAGE_ID.
  With FB_PAGE_ID and TEMP_ACCESS_TOKEN, fetch for Page's Instagram Business Account (https://graph.facebook.com/v15.0/{page-id}?fields=instagram_business_account&access_token={access-token}) to get IG_BUSSINESS_ACC_ID.
  With IG_BUSSINESS_ACC_ID and TEMP_ACCESS_TOKEN -> here is a list of endpoints: https://developers.facebook.com/docs/instagram-api/guides
   */
  private USER_ID: string = '';
  private TEMP_ACCESS_TOKEN: string =
    'EAAID9jmACuQBAIslzNbfc7ZCUoZAVrffPGZBzm9ZCWJFNQoR6RuZAkjRCNaYOWUSQ6IfDuRRmo7quGf7ub7iWrBmmCVZAsLnL8lb8mFweNCNk6ehZCibXpwjxLsZBHfoZAVDoCZAHvng7KhEbsMPDTOkPU3W3ELa6iDQ4KYTFPZCTi4AHp604tpDoMUGa3BCI3DKvyhvEItEirSSsiF0LPGR56cmK4kIU2Mas7PywNWRXI590daJkNvfWn5btXP96rELn0PqoYFZC7TgcgZDZD';
  private GET_FB_PAGE_ID_ENDPOINT: string = `https://graph.facebook.com/v15.0/${this.USER_ID}/accounts?access_token=${this.TEMP_ACCESS_TOKEN}`;
  private FB_PAGE_ID: string = '110902085227577';
  private GET_IG_BUSSINESS_ACC_ENDPOINT: string = `https://graph.facebook.com/v15.0/${this.FB_PAGE_ID}?fields=instagram_business_account&access_token=${this.TEMP_ACCESS_TOKEN}`;
  private IG_BUSSINESS_ACC_ID: string = '17841449876033878';

  constructor(private httpClient: HttpClient) {}
  public tempIgAccDetails: InstagramAccountDetails = {
    biography:
      '💻 JavaScript dev 🎮 Gamer\n#100dayscodechallenge\n📚 Self-taught\n📍 Poland 🇵🇱',
    followers_count: 3497,
    follows_count: 580,
    id: '17841449876033878',
    media_count: 112,
    name: 'Basia | 🌸 Web Development 🌸 Frontend 🌸 Tech 🌸',
    profile_picture_url:
      'https://scontent-waw1-1.xx.fbcdn.net/v/t51.2885-15/280175804_307461898085160_8694842630706373682_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=86c713&_nc_ohc=MMemnqOXsPMAX_5N7YC&_nc_ht=scontent-waw1-1.xx&edm=AL-3X8kEAAAA&oh=00_AfD5sWcTdPOEO00c2C_IFxxjL4DQ5FPTnilAeOR4Ym_-WA&oe=63C680AB',
    username: 'must_have_dev',
  };

  getIgBussinessAccID() {
    return this.httpClient.get(this.GET_IG_BUSSINESS_ACC_ENDPOINT);
  }

  getIGAccDetails() {
    //TODO: uncomment
    // return this.httpClient.get(
    //   `https://graph.facebook.com/v15.0/${this.IG_BUSSINESS_ACC_ID}?fields=biography%2Cid%2Cusername%2Cwebsite%2Cfollowers_count%2Cfollows_count%2Cprofile_picture_url%2Cmedia_count%2Cname&access_token=${this.TEMP_ACCESS_TOKEN}`
    // );
    return this.tempIgAccDetails;
  }
}
