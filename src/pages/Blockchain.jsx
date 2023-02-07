import './../App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import JsonData from "./../data/transactions.json"
import React from 'react';
import { useParams } from "react-router-dom";



export default function Blockchain({ match }){
    const params = useParams();
    if (params.addr !== undefined) {JsonData = JsonData.filter(a => a.sender === params.addr || a.receiver === params.addr); }
    const DisplayData=JsonData.map(
        (info)=>{
            return(
                <tr style={{ color:'#a284e0', fontWeight: 'bold'}}>
                    <td><a style={{ color:'#a284e0', fontWeight: 'bold'}} href={`/trans/${info.sender}`}>{info.sender}</a></td>
                    <td><a style={{ color:'#a284e0', fontWeight: 'bold'}} href={`/trans/${info.receiver}`}>{info.receiver}</a></td>
                    <td style={{color: '#a284e0'}}>{info.amount}</td>
                </tr>
            )
        }
    )
 
    return(
        <div className="blocktable" style={{ color:'#a284e0', fontWeight: 'bold'}}>
            <div className='paragraph'>
                <br></br>
            </div>
            <table className="table table-striped" style={{color:'#a284e0', fontWeight: 'bold'}}>
                <thead style={{ color:'#a284e0', fontWeight: 'bold'}}>
                    <tr>
                    <th>Sender</th>
                    <th>Receiver</th>
                    <th>Amount</th>
                    </tr>
                </thead>
                <tbody style={{ color:'#a284e0', fontWeight: 'bold'}}>
                 
                    
                    {DisplayData}
                    
                </tbody>
            </table>
        </div>
    )
 }
  
