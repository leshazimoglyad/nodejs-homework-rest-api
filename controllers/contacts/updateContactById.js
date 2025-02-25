//const { HttpError } = require("../../helpers");

const { Contact } = require("../../models/contact");

const updateContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate(contactId, req.body, {
    new: true,
  });
  if (!result) {
    res.status(404).json({ code: 404, message: "Not found" });
    return;
  }
  //if (!result) throw HttpError(404);
  res.json(result);
};

module.exports = updateContactById;