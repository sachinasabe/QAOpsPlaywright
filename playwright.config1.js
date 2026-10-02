// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';
import { trace } from 'node:console';



const config=({
  testDir: './tests',
  testMatch:'**/*.spec.js',
  retries:0,
  workers:3,
  /*maximum time for one test can run for */
  timeout:30*1000,
  expect:{
  
   timeout:5000,
  },
 reporter:'html',
 projects:[
  {
    name:'safari',
  
use: {
    
   browserName:'webkit',
   headless:true,
   screenshot:'off',
  trace: 'on',//off,on
  // ...devices['iPhone 11'],
  }
},
{
    name:'chrome',
  
use: {
    
   browserName:'chromium',
   headless:false,
   screenshot:'on',
   video:'retain-on-failure',
   ignoreHttpsSErrors:true,
   permissions:['geolocation'],
  trace: 'on',//off,on
  // viewport:{width:720,height:720}
  }
}
 ]
  
  
});
module.exports=config

