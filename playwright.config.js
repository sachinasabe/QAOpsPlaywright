// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';
import { trace } from 'node:console';



const config=({
  testDir: './tests',
  retries:2,
  /*maximum time for one test can run for */
  timeout:30*1000,
  expect:{
  
   timeout:6000,
  },
 reporter:'html',
  use: {
    // actionTimeout:10*1000,
    // navigationTimeout:30*1000,
   browserName:'chromium',
   headless:true,
   screenshot:'on',
  //  trace:'on'
  trace: 'on'//off,on
  },
  
});
module.exports=config

