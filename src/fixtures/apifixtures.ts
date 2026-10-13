
import{test as baseTest} from '@playwright/test'
import { ApiHelper } from '../api/ApiHelper'

type apifixtures ={
      
    apihelper:ApiHelper;
}

export let test = baseTest.extend<apifixtures>({
    
   apihelper: async({request},use)=>{
    let apihelper = new ApiHelper(request,process.env.API_BASE_URL!);
await use(apihelper);
    },

    
})