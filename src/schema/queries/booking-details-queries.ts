import { gql, Query } from "apollo-angular";

export const getBookingDetails = gql`
        query{
            getBookingDetails {
            bookingCode
            itinerary {
                type
                connections {
                id
                duration
                origin {
                    IATACode
                    name
                    city {
                    IATACode
                    name
                    country {
                        code
                        name
                    }
                    }
                }
                destination {
                    IATACode
                    name
                    city {
                    IATACode
                    name
                    country {
                        code
                        name
                    }
                    }
                }
                segments {
                    id
                    departFrom {
                    IATACode
                    name
                    city {
                        IATACode
                        name
                        country {
                        code
                        name
                        }
                    }
                    }
                    arriveOn {
                    IATACode
                    name
                    city {
                        IATACode
                        name
                        country {
                        code
                        name
                        }
                    }
                    }
                    marketingFlight {
                    number
                    carrier {
                        name
                    }
                    status {
                        name
                    }
                    numberOfStops
                    operatingFlight {
                        number
                        carrier {
                        name
                        }
                        duration
                        flown
                        checkInStart
                        localCheckInStart
                        checkInEnd
                        localCheckInEnd
                        scheduledArrival
                        localScheduledArrival
                        scheduledDeparture
                        localScheduledDeparture
                        arrivalTerminal {
                        name
                        }
                        cabin {
                        name
                        }
                        carrier {
                        name
                        }
                        equipment {
                        name
                        }
                        
                        }
                    }
        
                    
        
        
                    }
                }
                }
                passengers {
                    firstName
                    lastName
                    title {
                    name
                    }
                }
                }
            }
      `;

export const searchBooking = gql`
query FindBooking($bookingCode: String!, $lastName: String!){
    seachBooking(bookingCode: $bookingCode, lastName: $lastName) {
      bookingCode
    }
  }
`;