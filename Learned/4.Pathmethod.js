const path = require('path')
//path is core module in node so no need to install this packages

const test0 = path.join(__filename) //this will also so the path to this file
console.log(test0)

const test1=path.join(__dirname) //This will also give the directory name in which this file is located
console.log(test1)


//To manupulated or go back , go one step more in folder just like we do cd ./folder/anotherfolder or cd .. to go back
//we should to follwing technique to done this process by path.join  metho


const test3 = path.join(__filename , '..')  //by using string we call do everthing as we do usually same as cd .. or cd ./folder/folder
console.log(test3)  
//F:\Github\Express\Learned
//this.repo\learned



const test4 = path.join(__filename , '../..') 
console.log(test4)  
//F:\Github\Express\
//this.repo



const test5 = path.join(__filename , '../../public') 
console.log(test5) 
//F:\Github\Express\public
//this.repo\public



/* 
In this way we can change the path 

***********WARNING ******************************
After pushing this file in github there will no longer be f:\\Github\\ 
so dont panic after cloning this repo 
so i have target this repo to this.repo as also in above example

*/
