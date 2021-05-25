var firebaseConfig = {
    apiKey: "AIzaSyAF92Bdqx_nyOevmDYoXMUJrNfA-1dhagc",
    authDomain: "login-demo-33519.firebaseapp.com",
    databaseURL: "https://login-demo-33519-default-rtdb.firebaseio.com",
    projectId: "login-demo-33519",
    storageBucket: "login-demo-33519.appspot.com",
    messagingSenderId: "972671758440",
    appId: "1:972671758440:web:f6baceb85ba78402774bdd",
    measurementId: "G-66M3EKHC8F"
  };
firebase.initializeApp(firebaseConfig);
var db = firebase.firestore ();

console.log("Firebase connected");

// get current username
var name = window.prompt("Enter your name");

// Getting all message and listeing real time chat

db.collection("chats").orderBy("date").onSnapshot(function(snapshot){

    snapshot.docChanges().forEach(function(change,ind){
        var data = change.doc.data();
        // if new message added
        if(change.type == "added"){

            if(data.senderName == name){ //Which message i sent 

                var html = `
<p style="text-transform:uppercase"><li class="left clearfix">
                    <span class="chat-img pull-left">
                        <img src="http://placehold.it/50/FA6F57/fff&text=${data.senderName}" alt="User Avatar" class="img-circle" /><we> </we>
                     <sm>${data.message}</sm>${data.date}
                            </span>
                    <div class="chat-body clearfix">
                        <div class="header">
                            <strong class="primary-font"></strong> <small class="pull-riht text-muted">
                                <span class="glyphicon glyphicon-time"></span></small>
                        </div>
                        <p id="http://placehold.it/50/FA6F57/fff&text=${change.doc.id}-message">
                         
                            <hr>
                        </p>
                        <span onclick="deleteMessage('${change.doc.id}')" class="glyphicon glyphicon-trash"></span> 
                    </div>
                </li>`;

                $('.chat').append(html);

            }else{

                var html = `<li class="left clearfix">
                    <span class="chat-img pull-left">
                        <img src="http://placehold.it/50/55C1E7/fff&text=${data.senderName}" alt="User Avatar" class="img-circle" /><sn>${data.senderName}  ${data.date} </sn>
                  <br><sm>  ${data.message}</sm>
                            </span>
                    <div class="chat-body clearfix">
                        <div class="header">
                            <small class=" text-muted">
                                <strong class="glyphicon glyphicon-time"></span></strong>
                            <small class="pull-left primary-font"></small>
                        </div>
                        <p id="${change.doc.id}-message">
                         
                            <hr>
                        </p>
                        <span onclick="deleteMessage('${change.doc.id}')" class="glyphicon glyphicon-trash"></span> 
                    </div>
                </li>`;

                $('.chat').append(html);

            }
            if(snapshot.docChanges().length - 1 == ind){ // we will scoll down on last message
                // auto scroll
                
        $(".panel-body").animate({ scrollTop: $('.panel-body').prop("scrollHeight")}, 1000);
            }} 

        if(change.type == "modified"){

        }

        if(change.type == "removed"){

            $("#"+change.doc.id+"-message").html("this message has been deleted")

        }

    })  

})

function sendMessage(object){
    console.log(object)
    db.collection("chats").add(object).then(added => {
        console.log("message sent ",added)
    }).catch(err => {
        console.err("Error occured",err)
    })

}

function deleteMessage(doc_id){
    var flag = window.confirm("Are you sure to want delete ?")

    if(flag){

        db.collection("chats").doc(doc_id).delete();
        console.log("Deleted");

    }
}

// on click function
$('.send-button').click(function(){

    var message = $('#btn-input').val();

    if(message){
        // insert message 

        sendMessage({
            senderName : name,
            message : message,
            date : moment().format("DD/MM/YY HH:MM:SS")
        })

        $('#btn-input').val("")
    }

})

// also we will send message when user enter key
$('#btn-input').keyup(function(event) {

    // get key code of enter
    if(event.keyCode == 13){ // enter
       var message = $('#btn-input').val();

        if(message){
            // insert message 

            sendMessage({
                senderName : name,
                message : message,
                date : moment().format("DD-MM-YY HH:mm")
            })

            $('#btn-input').val("")
        }
    }
    // console.log("Key pressed");
})