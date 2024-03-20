/* Assign data to the hero section of the guest room details page */
export const roomDetailsHeroSection = {
  roomDetailsTitle: "President Luxury Double Room View NY City",
  roomDetailsDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit orem ipsum dolor sit amet.",
  checkIcon1: "2 Guest",
  checkIcon2: "2 Bed",
  checkIcon3: "1 Bathroom",
  customText1: "Start From",
  price: "$59",
  customText2: "/Night",
};

/* Assign title and descripton to the about room component of the guest room details page */
export const aboutRoom = {
  roomTitle: "About President Luxury Double Room View NY City",
  roomDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit. Fames tincidunt rhoncus viverra eu ut scelerisque. Erat orci scelerisque adipiscing potenti sollicitudin semper aliquam in ultricies. Sem vitae amet, egestas aliquam mi a arcu.Purus diam est vitae faucibus enim. Ultricies nunc vel magnis massa odio. Sed dictumst condimentum sit quis Lorem ipsum dolor sit egestas sed sit. Fames tincidunt rhoncus viverra eu ut sce scelerisque adipiscing potenti in ultricies. Sem vitae amet, egestas aliquam.",
};

/* Assign title and descripton to the facilities component of the guest room details page */
export const facilitiesSection = {
  facilitiesSectionTitle: "Hotels Facilities",
  facilitiesSectionDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit.",
};

/* Assign array of facilities data to the facilities component of the guest room details page */
export const facilitiesData = [
  { id: 1, facilityName: "Insurance" },
  { id: 2, facilityName: "Cleaning Services" },
  { id: 3, facilityName: "Swimming Pool" },
  { id: 4, facilityName: "Wifi" },
  { id: 5, facilityName: "Parking Area" },
  { id: 6, facilityName: "Restaurant" },
  { id: 7, facilityName: "24 Hours Front Desk" },
  { id: 8, facilityName: "Spa" },
  { id: 9, facilityName: "Elevator" },
  { id: 10, facilityName: "AC" },
  { id: 11, facilityName: "Wheelchair Access" },
  { id: 12, facilityName: "Meeting Facilities" },
];

/* Assign data to the additional info component of the guest room details page */
export const additionalInfoSection = {
  additionalInfoSectionTitle: "Additional Information",
  additionalInfoSectionDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elit sed pretium, egestas sed sit. Fames tincidunt rhoncus viverra eu ut scelerisque. Erat orci scelerisque adipiscing potenti sollicitudin semper aliquam in ultricies. Sem vitae amet, egestas aliquam mi a arcu.Purus diam est vitae faucibus enim. Ultricies nunc vel magnis massa odio. Sed dictumst condimentum sit quis Lorem ipsum dolor sit egestas sed sit. Fames tincidunt rhoncus viverra eu ut sce scelerisque adipiscing potenti in ultricies. Sem vitae amet, egestas aliquam.",
  checkinTime: "15:00 - 23:59",
  checkoutTime: "12:00",
  additionalInfoSectionctaCaption: "Book Now",
};

/* Assign array of accordion data to the additional info component of the guest room details page */
export const accordionData = [
  {
    id: "1",
    accordion: "What is the address of Best Western Hotel",
    accordionDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: "2",
    accordion: " What are the facilities available in Best Western Hotel?",
    accordionDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: "3",
    accordion: "Does Best Western have a swimming pool?",
    accordionDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: "4",
    accordion: "Items that are not allowed",
    accordionDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
  {
    id: "5",
    accordion: "Does Best Western have a swimming pool?",
    accordionDescription:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.",
  },
];

/* Assign title to the gallery component of the guest room details page */
export const galleryTitle = "Room Gallery";

/* Assign captions to the check icons of the room card component of the guest room details page */
export const roomCardCheckIconContent = {
  checkIcon1Caption: "2 Guest",
  checkIcon2Caption: "2 Bed",
  checkIcon3Caption: "1 bathroom",
};

export const roomCardTexts = {
  custonText1: "Learn More",
  custonText2: "Start From",
  custonText3: "Night",
};

/* Assign array of rooms data to the similar rooms component of the guest room details page */
//updated data structure 
export const roomsData = [
  {
    id: 1,
    roomCoverImage: "/images/hotelRooms/Room2.webp",                                      
    roomName: "Deluxe Double with New York City View 1",                                  
    roomShortDescription: "A scenic view of Hanthana mountain", //150 characters only     
    price: 59,                                                                           
    taxes:0,
    otherCharges: 0,
    terms: "",
    images: "['path1/image1','path2/image2']",
    description: "A glamourous stay in the wild experience of a lifetime",
    accommodationType : 'Delux Room',
    bedSizes1: "King Size",
    bedSizes2: "Single bed",
    maxAdultsCapacity: 3,
    children: 1,
    fascilities: ['iron', 'kettle'],
    bookingLinks: [{'airbnb': 'url1'}, {'bookingcom' : 'url2'}]

  },
  {
    id: 2,
    roomCoverImage: "/images/hotelRooms/Room3.webp",
    roomName: "Luxury Suite with Ocean View",
    roomShortDescription: "Experience luxury with breathtaking ocean views",
    price: 199,
    taxes: 20,
    otherCharges: 10,
    terms: "Cancellation policy: 24 hours prior to arrival",
    images: "['path3/image3','path4/image4']",
    description: "Indulge in the ultimate luxury with our ocean view suite",
    accommodationType: 'Suite',
    bedSizes1: "King Size",
    bedSizes2: "Queen Size",
    maxAdultsCapacity: 2,
    children: 0,
    fascilities: ['swimming pool', 'gym', 'spa'],
    bookingLinks: [{'expedia': 'url3'}, {'hotelscom': 'url4'}]
  },
  {
    id: 3,
    roomCoverImage: "/images/hotelRooms/Room4.webp",
    roomName: "Standard Double Room",
    roomShortDescription: "Comfortable and affordable double room",
    price: 79,
    taxes: 10,
    otherCharges: 5,
    terms: "Cancellation policy: 48 hours prior to arrival",
    images: "['path5/image5','path6/image6']",
    description: "Enjoy a cozy stay in our standard double room",
    accommodationType: 'Standard Room',
    bedSizes1: "Queen Size",
    bedSizes2: "Single bed",
    maxAdultsCapacity: 2,
    children: 1,
    fascilities: ['wifi', 'tv', 'mini fridge'],
    bookingLinks: [{'agoda': 'url5'}, {'orbitz': 'url6'}]
  },
  {
    id: 4,
    roomCoverImage: "/images/hotelRooms/Room2.webp",
    roomName: "Executive Suite with City View",
    roomShortDescription: "Experience luxury with stunning city views",
    price: 249,
    taxes: 25,
    otherCharges: 15,
    terms: "Cancellation policy: 72 hours prior to arrival",
    images: "['path7/image7','path8/image8']",
    description: "Indulge in the ultimate luxury with our city view suite",
    accommodationType: 'Suite',
    bedSizes1: "King Size",
    bedSizes2: "King Size",
    maxAdultsCapacity: 2,
    children: 0,
    fascilities: ['restaurant', 'bar', 'spa'],
    bookingLinks: [{'expedia': 'url7'}, {'hotelscom': 'url8'}]
  },
  {
    id: 5,
    roomCoverImage: "/images/hotelRooms/Room1.webp",
    roomName: "Family Room with Garden View",
    roomShortDescription: "Spacious room with beautiful garden views",
    price: 149,
    taxes: 15,
    otherCharges: 10,
    terms: "Cancellation policy: 48 hours prior to arrival",
    images: "['path9/image9','path10/image10']",
    description: "Enjoy a comfortable stay with your family in our garden view room",
    accommodationType: 'Family Room',
    bedSizes1: "King Size",
    bedSizes2: "Single bed",
    maxAdultsCapacity: 4,
    children: 2,
    fascilities: ['playground', 'swimming pool', 'restaurant'],
    bookingLinks: [{'agoda': 'url9'}, {'orbitz': 'url10'}]
  }
]

/* Assign title and descripton to the similar rooms component of the guest room details page */
export const similarRoomsDetails = {
  similarRoomsDetailsTitle: "Similar Rooms",
  similarRoomsDetailsDescription:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat elitsed pretium, egestas sed sit.",
};