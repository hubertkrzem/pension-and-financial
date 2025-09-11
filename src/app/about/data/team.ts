export type TeamMember = {
  id: string;       // Section id, for links that move the page straight to the item
  name: string;     // Name that will appear next to employee
  role: string;     // Positio title under employee name
  imageSrc?: string;// The filepath for the headshot of the employee
  imageAlt?: string;// For acessability; text that describes image when it cant be displayed.
  bio: string[];    // For input text surrounded by [], paragraphs seperated by commas (,)
  badges: string[]; // Unique pills also seperated by commas (,)
};

export const TEAM: TeamMember[] = [
  {
    id: "john-clare",
    name: "John Clare",
    role: "Director",
    imageSrc: "/Portrait_Placeholder.png",
    imageAlt: "Portrait of John Clare",
    bio: [
      "John brings over three decades of expertise in financial planning and pension advice.",
      "An Accredited Product Adviser (APA) with specialist qualifications in financial planning and pension advice, he has guided hundreds of Irish families in securing their long-term financial wellbeing."
    ],
    badges: [
        "APA Certified",
        "LIA Financial Planning",
        "CPD Compliant"
    ]
  },
  {
    id: "yvette-fidgeon",
    name: "Yvette Fidgeon",
    role: "Financial Advisor",
    // Add imageSrc back in
    imageAlt: "Portrait of Yvette Fidgeon",
    bio: [
      "Brings strong business acumen, joins John in 2024",
    ],
    badges: [
      "Qualified financial advisory QFA",
      "Retirement planning advisor RPA",
      "Specialist investment advisor SIA",
      "Approved Product advisor APA",
    ]
  },
  {
    id: "michael-clare",
    name: "Michael Clare",
    role: "Financial Advisor in training",
    // Add imageSrc back in
    imageAlt: "Portrait of Michael Clare",
    bio: [],
    badges: [
        "BSc Accounting & Finance",
        "Specialist investment advisory SIA"
    ]
  }
];