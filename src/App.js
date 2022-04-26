//创建“外壳”组件App
import React,{Component} from 'react'
import logo from './logo.svg'
import './App.css'
import HttpUtil from "./utils/HttpUtils";
import ApiUtils from "./utils/AppUtils";

import axios from "axios";
// async function test_axios(){
//   const {data} = await axios.get('/api/get');
//   console.log(data);

//创建并暴露App组件
export default class App extends Component{
    handleOK = ()=>{
                // console.log("填写正确！");
                HttpUtil.post(ApiUtils.API_UPDATE, "dsvgufdkv")
                    .then(
                        re=>{
                            console.log("返回结果：",re);
                        }
                    )
                    .catch(error=>{
                        console.log(error)
                    });

    }

	render() {
      return (
          <div className="App" onClick={this.handleOK}>
            <h1 >vhpdsfpiudddd</h1>
          </div>
      )
    }
}


