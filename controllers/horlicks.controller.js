import Horlicks from "./../models/horlicks.model.js";

export const addHorlicksSales = async(req,res)=>{
    try{
    const {location,shift,horlicksSale,water500mlSale,water1000mlSale,subDate} = req.body
    const horlicksData = await Horlicks.findOne({subDate,shift,location})

    if(!horlicksData){
        const newHorlicksData = await Horlicks.create({location,shift,horlicksSale,water500mlSale,water1000mlSale,subDate})
        res.status(201).json({success:true,data:newHorlicksData})
    }else{
        const horlicksSale1 = Number(horlicksSale)
        const water500mlSale1 = Number(water500mlSale)
        const water1000mlSale1 = Number(water1000mlSale)
        horlicksData.horlicksSale += horlicksSale1
        horlicksData.water500mlSale += water500mlSale1
        horlicksData.water1000mlSale += water1000mlSale1
        await horlicksData.save({validateBeforeSave:false})
        res.status(200).json({success:true,data:horlicksData})
    }
}catch(err){
    return res.status(500).json({success:false,data:err.message})
}
}

export const getHorlicksSales = async (req, res) => {
  try {
    const { shift, subDate } = req.query;

    if (!shift || !subDate) {
      return res.status(400).json({
        success: false,
        message: "Please provide both shift and subDate",
      });
    }

    const sales = await Horlicks.find({ shift, subDate }).sort({ location: 1 });

    if (!sales || sales.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No sales data found for this shift and date",
      });
    }

    res.status(200).json({ success: true, data: sales });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};