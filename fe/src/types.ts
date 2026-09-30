export interface Bear {
  id: string
  name: string
  description: string
  image: string
  color: string
}

export interface Cat {
  image: string;
  name: string;
  message: string;
  background: string;
  sound: string;
}

export interface GiftSubmission {
  name: string
  bear: string
  address: string
  message: string
}