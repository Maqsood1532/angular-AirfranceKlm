export type BookingDetail = {
    bookingCode: string;
    itinerary: Itinerary
}

export type Itinerary = {
    type: string;
    connections: Connections[];
}

export type Connections = {
    id: number;
    duration: string;
    origin: Address;
    destination: Address
}

export type Address = {
    IATACode: string;
    name: string;
    city: City
}

export type City = {
    IATACode: string;
    name: string;
    country: Country
}

export type Country = {
    code: string;
    name: string
}

export type Query = {
    bookingDetails: BookingDetail[];
}