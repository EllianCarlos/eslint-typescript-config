import { Schema, model, Document } from 'mongoose'

interface UserInterface extends Document {
  email?: string
  fName?: string
  lName?: string
  fullName(): string
}

const UserSchema = new Schema({
  email: String,
  fName: String,
  lName: String
}, {
  timestamps: true
})

UserSchema.methods.fullName = function (): string {
  return `${this.fName} ${this.lName}`
}

export default model<UserInterface>('User', UserSchema)
