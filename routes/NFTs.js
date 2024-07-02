const router = require("express").Router();
const NFT = require("../models/NFT");

router.post("/save", async (req, res) => {
  const newNFT = new NFT({
    name: req.body.name,
    image: req.body.image,
    cost: req.body.cost,
    costCrypto: req.body.costCrypto,
  });

  try {
    const savedNFTs = await newNFT.save();
    return res.status(200).send({ success: true, NFT: savedNFTs });
  } catch (error) {
    return res.status(400).send({ success: false, msg: error });
  }
});

router.get("/getOne/:id", async (req, res) => {
  const filter = { _id: req.params.id };
  const data = await NFT.findOne(filter);

  if (data) {
    return res.status(200).send({ success: true, NFT: data });
  } else {
    return res.status(200).send({ success: false, msg: "Data not found" });
  }
});

// Get all NFTs
router.get("/getAll", async (req, res) => {
    try {
      const data = await NFT.find({}).sort({ createdAt: 1 });
      if (data.length > 0) {
        return res.status(200).send({ success: true, NFT: data });
      } else {
        return res.status(404).send({ success: false, msg: "Data not found" });
      }
    } catch (error) {
      return res.status(400).send({ success: false, msg: error.message });
    }
  });

router.post("/update/:id", async (req, res) => {
  const filter = { _id: req.params.id };

  const options = {
    upsert: true,
    new: true,
  };

  try {
    const result = await NFT.findOneAndUpdate(
      filter,
      {
        name: req.body.name,
        image: req.body.image,
        cost: req.body.cost,
        costCrypto: req.body.costCrypto,
      },
      options
    );

    return res.status(200).send({ success: true, data: result });
  } catch (error) {
    return res.status(400).send({ success: false, msg: error });
  }
});

router.delete("/delete/:id", async (req, res) => {
  const filter = { _id: req.params.id };
  const result = await NFT.deleteOne(filter);

  if (result) {
    return res
      .status(200)
      .send({
        success: true,
        msg: "Data was deleted successfully",
        data: result,
      });
  } else {
    return res.status(400).send({ success: false, msg: "Data not found" });
  }
});

module.exports = router;
