import { useState } from "react"
import Icon from "react-icons-kit";
import {send} from 'react-icons-kit/fa/send'
import {smallRight} from 'react-icons-kit/entypo/smallRight'
import {ellipsisH} from 'react-icons-kit/fa/ellipsisH'
import ChatText from "./ChatText";



function Chat() {
    let userChat = '';
    let [msg, setMsg] = useState('')
    let [chat, setChat] = useState('')
    let [arr, setArr] = useState('')
    const value = `${chat}`
    const tes = []
    const coba = tes.map((num) => {
        return (
            <div class="chat-text-user"> </div>
        )
    })

    
    const [todos, setTodos] = useState([
        {
          text: "This is a sampe todo",
          isDone: false
        }
      ]);

    const addTodo = text => {
        const newTodos = [...todos, { text }];
        setTodos(newTodos);
    };


    console.log(msg)

    function kirim(e) {
        e.preventDefault();

        console.log("berhasil");
        userChat = msg;
        console.log(userChat)
        
        const dd = userChat
        setChat(dd)
        setMsg('')
        
       
    }
    function chatText(){
        return(
            <div class="chat-text-user">{userChat}</div>
        )
    }
    

    return(
        <div id="main">
        <div id="wrap-info">
            <div id="info-chat">
                <div id="left-con">
                    <div id="back">
                        <a href="beranda.html"><Icon size={'32'} icon={smallRight} id="back-icon"/></a>
                    </div>
                    <div id="profile">
                        <div id="wrap-image">
                        </div>
                        <ul id="prof">
                            
                        </ul>
                    </div>
                </div>
                <div id="right-con">
                    <Icon size={'20'} icon={ellipsisH} id="more"/>
                </div>
            </div>
        </div>
        <div id="wrap-chat">
            <div id="tempat-chat" >
                <div class="chat-text">Apa Kendala anda?</div>
                {coba}
                
                
            </div>
            <div id="wrap-send">
                <form id="btn-send" onSubmit={kirim}>
                    <input type="text" id="chatbox" name="" value={msg} onChange={(e) => setMsg(e.target.value)}/>
                    <button type="submit" id="kirim" ><Icon icon={send} id="icon-kirim"/></button>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Chat