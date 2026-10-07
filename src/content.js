// All site copy lives here, carried over word-for-word from the original site.

export const PHONE = '8347463055'
export const WA_NUMBER = '918347463055'
export const WA_MESSAGE =
  'Hi, I am interested in taking a soda franchise of your brand. Could you please share the details regarding the process and investment? Looking forward to your response.'
export const WA_URL = `https://api.whatsapp.com/send?phone=${WA_NUMBER}&text=${encodeURIComponent(WA_MESSAGE)}`

export const asset = (p) => `${import.meta.env.BASE_URL}${p}`

export const social = {
  facebook: 'https://www.facebook.com/people/Notica-Surat/61575696807831/?rdid=ziMR6dXQ61Lkld10&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F15GtJx9fFW%2F',
  instagram: 'https://www.instagram.com/beverages_notica?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==#',
  youtube: 'https://youtube.com/@notica-r8o?si=XZyknoFNCflRVOpy',
}

export const nav = [
  { label: 'Home', href: '#top' },
  { label: 'About Us', href: '#about' },
  { label: 'ROI', href: '#roi' },
  { label: 'Franchise Kit', href: '#kit' },
  { label: 'Locations', href: '#locations' },
  { label: 'Contact', href: '#contact' },
  { label: 'Terms & Conditions', href: '#terms' },
]

export const phases = [
  { n: '01', text: 'Ask Our Team For "pro Setup" To Know And Then Space Or Shop Inspection Done By Franchies' },
  { n: '02', text: 'Franchise Booking to be done with a deposit of Rs. 1,00,000 in NOTICA LLP Account & Application Form Following which the agreement and Legal Copies are Completed and got notarized.' },
  { n: '03', text: '1st Installment of Rs.3,50,000 the Franchise to be paid within 10 Days of the Booking to prevent lapse of franchise booking.' },
  { n: '04', text: 'All Materials are dispatched against the Balance Full Payment (3,50,000/-)following. Chef Training is Done with Standard Operations Procedures (SOP).' },
  { n: '05', text: 'Agreement period starts from the date of Inauguration & monthly monitoring with helpline executive assigned.' },
]

export const about = {
  paras: [
    'Surat Food And Beverages is a leading innovator in high-quality flavors for the soft drink industry. Based in Surat, we specialize in crafting mouth-watering soda flavors and milkshakes that delight customers globally.',
    'At Notica, our mission is to establish ourselves as a trusted, premium, and rapidly growing brand in India’s beverage market. We do not just serve beverages — we deliver an exceptional experience built on quality, consistency, and trust for every customer.',
    'Our belief is simple: “Great Taste Creates Great Memories.” With this philosophy, we are committed to providing superior products, premium service, and memorable experiences every day. Our goal is to create a strong and lasting connection with our customers through every sip they enjoy.',
  ],
  points: [
    'Premium soft drink flavor innovations',
    'Vision to lead niche beverage markets',
    'Setting new standards in quality & taste',
    'Surat-based with global ambitions',
    'Robust marketing and supply chain team',
    'Growth driven by a franchise-first model',
  ],
  vision: 'To become India’s most trusted and innovative beverage franchise brand by delivering exceptional taste, premium quality, and unforgettable customer experiences.',
  mission: 'We aim to provide high-quality beverages, strong franchise support, and consistent service standards that help our partners grow successfully with the Notica brand.',
  whyTitle: 'Why Partner with NOTICA?',
  why: [
    ['Proven Business Model', 'Our business model is strategically optimized to ensure minimal wastage, maximum operational efficiency, and consistent profitability for franchise partners.'],
    ['Strong Brand Identity', 'With our bold red aesthetic machines, premium packaging, and impactful branding, NOTICA creates a powerful visual presence that naturally attracts customer attention and increases footfall.'],
    ['Semi-Automated Operations', 'Our advanced dispensing system is designed for simplicity and convenience. No highly skilled chef or specialized labor is required — with minimal training, staff can easily operate the machine efficiently.'],
  ],
  closing: [
    'The Indian beverage market is rapidly shifting from traditional soft drinks toward refreshing, fusion, and customized local flavors — and NOTICA is perfectly positioned to meet this evolving demand.',
    'Our brand delivers high-quality, hygienic, and instant multi-flavor sodas and shakes through advanced commercial dispensing systems designed to provide maximum output within minimal space.',
    'As an investor or franchise partner, NOTICA offers an excellent low-investment, high-return (ROI) business opportunity backed by growing consumer demand and a scalable business model.',
  ],
  certs: [
    ['About-Cert/FSSAI_logo.webp', 'FSSAI'],
    ['About-Cert/Satyamev.webp', 'Government of India'],
    ['About-Cert/msme-logo.webp', 'MSME'],
    ['product/make-in-india.png', 'Make in India'],
    ['About-Cert/iso.png', 'ISO'],
  ],
}

export const roi = {
  title: 'RETURN ON INVESTMENT (ROI)',
  percent: '50-60%',
  label: 'AVERAGE PROFIT MARGIN',
  desc: 'Our robust R&D, customized menu, affordable raw materials, and optimized pricing deliver a 50-60% gross profit margin.',
  timeline: 'Franchise ROI achieved in 6-12 months',
  tag: 'VOCAL FOR LOCAL',
  projectionTitle: 'ROI Projection',
  projectionText: 'Projected sales based on our stores. At Notica, pricing maximizes sales, but figures may vary by location.',
  cases: [
    { name: 'Case A', time: '1-2 Months', sale: '₹5,000', revenue: '₹1,50,000', expenses: '₹87,500', profit: '₹62,500' },
    { name: 'Case B', time: '3-5 Months', sale: '₹8,500', revenue: '₹2,55,000', expenses: '₹1,19,000', profit: '₹1,35,500' },
    { name: 'Case C', time: '6+ Months', sale: '₹12,000', revenue: '₹3,60,000', expenses: '₹1,50,500', profit: '₹2,09,500' },
  ],
  disclaimer: 'This is a report used for indicative purpose. No part of this report guarantees sales or costs. The Revenue & Expenditures are calculated upon the reasonable assumpptions derived from experience. The Success of a Franchisee depends upon many factors, this report is to guide the franchisee to take the path to success. The Figures will vary on different factors like Pricing, Service, Demographics, Paying Capacity, and most importantly location. Its advised the franchisee to take advice from Franchisor and then build an business play accordingly to attain success.',
}

export const kit = {
  intro: 'Complete Setup by NOTICA team is also offered in case where you wish to get the interior exterior setup done by us.',
  items: [
    ['Franchise-Kit/LED-3.webp', 'LED BOARD INCLUDED'],
    ['Franchise-Kit/cctv.webp', 'CCTV CAMERA INCLUDED'],
    ['Franchise-Kit/TV-1.webp', 'TV INCLUDED'],
    ['Franchise-Kit/RealTank.webp', '500 LITRE WATER TANK'],
    ['Franchise-Kit/Tank1.webp', 'WATER PUMP'],
    ['Franchise-Kit/juicer.webp', 'JUICER MIXER'],
  ],
  hireList: ['How To Hire', 'Sources To Hire', 'Hiring Conditions', 'Staff Joining And Document Procedure'],
  planner: 'We Provide a comprehensive Day to Day Planner to Manage Hygiene and Systematic Staff Management as per Industry Standards',
}

export const support = {
  title: "We're Here to Help",
  sub: 'Resolution to Any Query Within 24 Hours',
  text: 'We provide dedicated helpline support exclusive for every franchise, ensuring your concerns are addressed promptly and efficiently.',
  hours: '*Working Hours:* 9am to 11pm (Monday to Friday)',
}

export const terms = [
  'All Payments Made are Non-Refundable.',
  '18% GST as per Government Policy & Subject to Change.',
  'No Royalty Model with 100% Transparency in Terms.',
  'All Policies by Notica are to be Followed',
  'Materials get dispatched within 1-2 Weeks of the final Payment.',
  'One year warranty for Notica shop service and service person will come but his traveling expenses will have to be paid by the shop owner.',
  'NEFT/RTGS and Cash Deposits on Company Account Only.',
  'Transport of Materials & Raw Materials Cost Borne by Franchisee.',
  'All subject to surat juridiction.',
  'You have to buy raw materials from Notica only.',
  'If the franchisee uses outside raw materials, the franchisee should pay a 10% royalty (minimum 2 Lakhs to 5 Lakhs) as per the counter!',
  "Shopowner can't hide the numbers or company information that we have put on the shop!",
  'If the franchisee purchases any products from outside vendors without prior written approval from the company, the company reserves the right to impose a penalty or cancel the franchise agreement.',
  'The franchisee shall not provide training to any third party without prior written permission from the company. Otherwise, the company reserves the right to take legal action or cancel the franchise agreement.',
]

export const featuredProducts = [
  ['Services/FountainMachine.png', '14+2 Soda Fountain Machine'],
  ['Services/fridge-photoroom.png', 'Fridge vertical(300 Ltr)'],
  ['Franchise-Kit/TV-1.webp', 'TV Included'],
]

export const videos = [
  { src: 'media/IMG_7942.web.mp4', text: 'Experience our unique soda-making process.' },
  { src: 'media/video4.web.mp4', text: 'Experience our unique soda-making process.' },
  { src: 'media/IMG_7942.web.mp4', text: 'Experience our unique soda-making process.' },
]

export const marketing = {
  title: 'Create a Refreshing Reel!',
  text: 'Be the sparkle in our soda story! Join the ultimate marketing challenge by creating an energetic reel celebrating your favorite fizz. Bring your creativity, go viral, and win awesome rewards!',
  cta: 'Join the Challenge',
  inspoTitle: 'Need Inspiration?',
  inspoText: 'Check out top trending reels by our soda lovers and get inspired! Show your twist with a fun, fresh vibe.',
}

export const booking = {
  title: 'BOOKING DETAILS',
  heading: 'Account Details',
  sub: 'FOR NEFT/RTGS/IMPS',
  rows: [
    ['Bank Name', 'HDFC BANK - UTRAN - SURAT'],
    ['Account Name', 'Surat Food and Beverage Pvt Ltd'],
    ['Account Number', '50200101730832'],
    ['IFSC Code', 'HDFC 000 5699'],
    ['Gst number', '24ABOCS0295D1ZB'],
    ['Fssai Licence number', '10240815106346760'],
  ],
  accept: [
    ['Axis.webp', 'Axis Bank'],
    ['ICICI_Bank_Logo.webp', 'ICICI Bank'],
    ['Kotak.webp', 'Kotak Bank'],
    ['HDFC_Bank_Logo.webp', 'HDFC Bank'],
    ['BOB.webp', 'Bank of Baroda'],
    ['SBI.webp', 'SBI'],
    ['IDBI-Bank-logo.webp', 'IDBI Bank'],
    ['Yes_Bank_logo.webp', 'YES Bank'],
    ['BHIM.webp', 'BHIM'],
    ['Google_Pay_Logo.webp', 'Google Pay'],
    ['phonepe.webp', 'PhonePe'],
    ['Paytm_Logo_.webp', 'Paytm'],
  ],
}

export const footer = {
  company: 'Surat Food And Beverages Pvt. Ltd.',
  address: 'Shop No. 29, Syam Vatika Apartment, near Nyra Petrol Pump, Bhada, Kamrej, 394190 Surat, Gujarat, India.',
  phones: ['83474 63055', '97271 51653', '88664 43220'],
}
