import config from '../config/config';
import {Client, Account, ID} from 'appwrite';


export  class AuthService {
    client = new Client()
    account;

    constructor(){
        this.client
                  .setEndPoint(config.appwriteUrl)
                  .setProject(config.appwriteProjectId);
        this.account.new Account(this.client)
    }

    async createAccount({email,password,name}){
        try {
          const userACcount = await this.account.create(ID.unique(),email,password,name)
          if(userACcount){
            // Call another method
            return this.login({email,password})
          }else{
            return userACcount;
          }
        } catch (error) {
            throw error
        }
    }

    async login({email,password}){
       return await this.account.createEmailPasswordSession(email,password)
    }

    async getCurrentUser(){
        try {
            await this.account.get();
        } catch (error) {
            console.log("Appwrite service :: getCurrentUser :: error ",error)
        }

        return null;
    }

    async logout(){
        try {
            await this.account.deleteSessions()
        } catch (error) {
            console.log("Appwrite service :: logout :: error ",error)
        }
    }

}


const authService = new AuthService();

export default AuthService;