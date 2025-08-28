import mongoose from 'mongoose';
const { Schema } = mongoose;

const organizationKycSchema = new Schema({
  location: String, 
  panId: String,
  registrationDate: String,
  organization: { type: Schema.Types.ObjectId, ref: 'donoe' },
  isKycSubmitted: { type: Boolean, default: false },
  isKycApproved: { type: Boolean, default: false },
});
const organizationKyc = mongoose.model('organizatioKyc', organizationKycSchema);
export default organizationKyc;