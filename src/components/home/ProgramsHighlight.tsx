import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ProgramCardProps {
  title: string;
  description: string;
  imageUrl: string;
  slug: string;
}

const ProgramCard = ({
  title,
  description,
  imageUrl,
  slug,
}: ProgramCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-lg">
      <div className="aspect-w-16 aspect-h-9 relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      </div>
      <CardContent className="pt-6">
        <h3 className="text-xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
      </CardContent>
    </Card>
  );
};

const ProgramsHighlight = () => {
  const programs = [
    {
      title: "Cloths Distribution Program",
      description:
        "In February 2018, CARE FOR NEEDY CHARITABLE TRUST conducted a clothes distribution program in three flood-affected Panchayats of Thakurganj Block: Bholmara, Burnai, and Nagar. The initiative supported various age groups, focusing on children. Around 80 children received essential clothing, helping them recover and stay warm during tough times caused by the recent flood.",
      imageUrl: "/assets/Cloths-distribution-program.png",
      slug: "Clothes Distribution Program",
    },
    {
      title: "Material Collection Activity For Trust",
      description:
        "CNCT organized a material collection drive at Balajee Society on 18th March 2018. Items such as clothes, toys, shoes, and food were collected with the support of kind donors. All collected materials were later distributed to underprivileged individuals and families, helping us extend care and support to those in need.",
      imageUrl: "/assets/Material-Collection.png",
      slug: "emergency",
    },
    {
      title: "Center for Drugs Addicts",
      description:
        "CARE FOR NEEDY CHARITABLE TRUST runs a dedicated center to support individuals struggling with drug addiction. Our aim is to help them recover through counseling, awareness programs, and rehabilitation support. With compassion and guidance, we work towards transforming lives by helping addicts regain their health, self-respect, and a fresh start toward a better future.",
      imageUrl: "/assets/Drugs-addicts.png",
      slug: "emergency",
    },
    {
      title: "Ration & Medicine Distribution",
      description:
        "During the COVID-19 pandemic, CARE FOR NEEDY CHARITABLE TRUST stepped forward to support vulnerable families by distributing essential dry ration kits and medicines. Amid lockdowns and uncertainty, our team ensured timely help to those in need, especially daily wage earners and the elderly. This initiative helped hundreds of families survive the crisis with dignity and care.",
      imageUrl: "/assets/Medicine-distribution.png",
      slug: "emergency",
    },
    {
      title: "Activities for Poor & Needy ",
      description:
        "Actively engaged in various initiatives between 2016 and 2018 to support underprivileged communities. One notable event was celebrating Children’s Day with poor and needy children in the Alandi Pune Slum Wasti. The celebration included educational activities, distribution of gifts, and creating a joyful environment to uplift the spirits of children in need.",
      imageUrl: "/assets/Activities-for-Poor-Needy.png",
      slug: "emergency",
    },
    {
      title: "Prod Shiksha Kendra",
      description:
        "At Santnagar and Gurudwara Colony, CARE FOR NEEDY CHARITABLE TRUST runs Prod Shiksha Kendra for senior citizens. We offer basic reading, writing, and awareness sessions on legal help, bank accounts, and government schemes. Led by Ms. Pooja Adhav, daily sessions are held morning and evening. Our goal is to help elderly people lead happy, informed lives.",
      imageUrl: "/assets/Prod-shiksha-kendra.png",
      slug: "orphanages",
    },
    {
      title: "Senior Citizens Rehabilitation",
      description:
        "On 26th January 2018, CARE FOR NEEDY CHARITABLE TRUST inaugurated its first Senior Citizens Rehabilitation Center in Lohegaon, Pune. The ceremony included flag hoisting, ribbon cutting by Mr. Ramling Shinde, and lamp lighting by Mrs. Gophane. With support from our Secretary and volunteers, 37 elders were welcomed, served lunch, and offered a peaceful, caring environment.",
      imageUrl: "/assets/Senior-citizens-rehabilitation.png",
      slug: "senior-citizens",
    },
    {
      title: "Pulse Polio Abhiyan",
      description:
        "On 4th March 2018, CARE FOR NEEDY CHARITABLE TRUST supported Pune Municipal Corporation’s Pulse Polio Abhiyan. Guided by Dr. Maya Lohar and Nurse Meena Harne, we set up 23 booths with 67 volunteers across Dhanori, Vishrantwadi, Lohegaon, and Santnagar. Nearly 1300 children received polio drops. We also assist in tree plantations, blood donation, and free dental camps.",
      imageUrl: "/assets/Pulse-polio-abhiyan.png",
      slug: "widow-training",
    },
    {
      title: "Silai Prashikshan Kendra",
      description:
        "We have Silai Center at Gurudwara Colony. There Ms. Sandipa Tigga is our co-worker who trains widows and school dropout girls in tailoring skills to become self-dependent and also we provide sewing machine to the ones who gets married off or needy. Till now we have trained 39 widows and 80 Girls. The Center operates from 11am to 3 pm everyday.",
      imageUrl: "/assets/Silai-prashikshan-kendra.png",
      slug: "education",
    },
    {
      title: "Senior Citizen Home",
      description:
        "we prioritize the well-being of our senior citizens by providing a safe and loving environment. Our Senior Citizen Home offers a comfortable and supportive space where elderly individuals can enjoy peace, dignity, and a sense of community. With dedicated staff, nutritious meals, recreational activities, and personal care, we aim to ensure that every senior citizen feels valued and cared for.",
      imageUrl: "/assets/Senior-citizen-home.png",
      slug: "emergency",
    },
  ];

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Our Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Through our diverse initiatives, we address critical needs in our
            communities and create pathways to sustainable change.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <ProgramCard key={index} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsHighlight;
