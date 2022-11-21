
export type BookingRecord = {
    bookingCode: String;
    passengers: Passenger[]
}

export type Passenger = {
    firstName: String;
    lastName: String;
    title: Title
}

export type Title = {
    name: String
} 

export type BookingDetail = {
    bookingCode: string;
    itinerary: Itinerary;
    passenger: Passenger
}

export type Itinerary = {
    type: string;
    connections: Connections[];
}

export type Connections = {
    id: number;
    duration: string;
    origin: Address;
    destination: Address;
    segments: Segment[]
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

export type Segment = {
    id: number;
    departFrom: Address;
    arriveOn: Address;
    marketingFlight: MarketingFlight
}

export type MarketingFlight = {
    number: string;
    carrier: CodeName;
    status: CodeName;
    numberOfStops: number;
    operatingFlight: OperatingFlight
}

export type OperatingFlight = {
    number: string;
    carrier: CodeName;
    duration: string;
    flown: string;
    checkInStart: string;
    localCheckInStart: string;
    checkInEnd: string;
    localCheckInEnd: string;
    scheduledArrival: string;
    localScheduledArrival: string;
    scheduledDeparture: string;
    localScheduledDeparture: String
    arrivalTerminal: ArrivalTerminal
    cabin: CodeName;
    equipment: CodeName
}

export type ArrivalTerminal = {  
    name: string;
}

export type CodeName = {
    code: string;
    name: string;
}

export type Equipement = {
    code: string;
    name: string;
}

// export type passengers = {
//     id: number;
//     firstName: string;
//     lastName: string;
//     title: {
//         name: string;
//     }
// }


//Queries 
export type Query = {
    getBookingDetails: BookingDetail[];
    seachBooking(bookingCode: String, lastName: String) : BookingRecord
}