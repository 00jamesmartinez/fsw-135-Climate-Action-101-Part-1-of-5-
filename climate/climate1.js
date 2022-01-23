const mongoose =require("mongoose");
const router = express.router();
mongoose.connect("mongodb://localhost:27017/local",{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("connection works"))
.catch((err)=>console.log(err));

var schema=new mongoose.Schema({
    name:String
});

var userModel=mongoose.model("User",schema);
var issueModel=mongoose.model("Issue",schema);
var commentModel=mongoose.Model("Comment",schema);

const data = new mongoose.model("{schema}",schema);

const insertProduct = async() => 
{
    try {
        const data = new mongoose.model("data",schema);
        const prod1 = new data({
name:"test prod",
price:100
        });
    const result=await prod1.save();
    console.log(result);
    }
    catch(err) {
        console.log(err);
    }
}
insertProduct();

const readProduct = async() => 
{
    try {
        const result=await data.find();
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

readProduct();

const updateProduct = async(name) => {
    try{
        const result=await data.updateOne({name},{
            $set:{
                price:200
            }
        },{
            new:true,
            useFindAndModify:false
        
        });
        console.log(result);
    }
    catch(err)
    {
        console.log(err);
    }
}
updateProduct("test prod");


const deleteProduct = async(name)=>{
    try{
        const result = await data.deleteOne({name});
        console.log(result);
    }
    catch(err){
        console.log(err);
    }
}

deleteProduct("test prod");
