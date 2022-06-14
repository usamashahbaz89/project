import dataModel from "../models/datafromform.js";


export const getdata = async (req,res) =>{
    try {
        const applicants = await dataModel.find();
        res.json(applicants);
    } catch (error) {
        console.log("Not found any data");
    }
};

export const postdata = async (req,res) =>{
    console.log("post api reached");
    const firstName = req.body.firstName;
    const firstNameInString = firstName.toString();

    const lastName = req.body.lastName;
    const lastNameInString = lastName.toString();
    
    const email = req.body.email;
    const emailInString = email.toString();


    const newApplicant = new dataModel ({
        firstName: firstNameInString,
        lastName: lastNameInString,
        email: emailInString
    });

    try{
         await newApplicant.save();
        res.json(newApplicant);
    } catch (error) {
        console.log("Not Saved");
    }
};

export const deletedata= async (req,res)=>{
    console.log('delete api reached');
    console.log(req.params.id);
    const del=await dataModel.findByIdAndDelete(req.params.id);
    try{
        if(del)
        {
            console.log("deleted");
            res.status(200).send("user deleted Successfully");
        }
    }
    catch(err){
        res.status(500).send(err.msg);
        
    }
  
  }

   export const updatedata= async(req,res)=>{

  const updateduser = await dataModel.findByIdAndUpdate(req.params.id,req.body,
    
     {
     new : true,
    runValidators : true
   })

  try{
    res.status(200).json({
         status : 'Success',
        data : {
           updateduser
        }
     })
 }


 catch(error){

     console.log('error')

 }
 };

 