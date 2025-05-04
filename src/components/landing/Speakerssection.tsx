import React from "react";
import { Card, CardContent } from "../../components/ui/card";

const speakers = [
  {
    id: 1,
    name: "Dr. Gamma Kosala, S.Si.",
    role: "Researcher & Educator in AI Informatics Lecturer",
    imageUrl: "/speakers/s1.png",
  },
  {
    id: 2,
    name: "Kori DyahWiratikta, M.Psi., Psikolog",
    role: "Clinical Psychologist & Mental Health Advocate",
    imageUrl: "/speakers/s2.png",
  },
  {
    id: 3,
    name: "Dionisius Mehaga Bangun Djayasaputra",
    role: "Illustrator & Visual Storyteller",
    imageUrl: "/speakers/s3.png",
  },
  {
    id: 4,
    name: "Ni Putu Tanya Hapsari Wulandari",
    role: "Young Entrepreneur & Outstanding Student Telkom University Class of 2024",
    imageUrl: "/speakers/s4.png",
  },
  {
    id: 5,
    name: "Muhamad Arvin Zulfikar",
    role: "Chairman of Genbi Telkom University Outstanding Student Information Systems 2023.",
    imageUrl: "/speakers/s5.png",
  },
];

const vectorPositions = [
  { top: "12%", left: "5%" },
  { top: "38%", left: "60%" },
  { top: "70%", left: "20%" },
];

const fImagePositions = [
  { top: "15%", left: "75%" },
  { top: "58%", left: "35%" },
  { top: "80%", left: "65%" },
];

export const SpeakersSection = () => {
  return (
    <section className="relative w-full bg-[#304030] overflow-hidden py-16">
      {/* Background */}
      <img
        src="/speakers/vector.png"
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

           {/* Vector backgrounds */}
           {vectorPositions.map((position, index) => (
          <img
            key={index}
            className="absolute w-[195px] h-[218px] object-cover"
            style={{ top: position.top, left: position.left }}
            alt="Vector"
            src="speakers/vector-2.png"
          />
        ))}

       {/* F images */}
       {fImagePositions.map((position, index) => (
          <img
            key={index}
            className="absolute w-[166px] object-cover"
            style={{
              top: position.top,
              left: position.left,
              height:
                position.top === "752px" && position.left === "742px"
                  ? "176px"
                  : "186px",
            }}
            alt="F"
            src="speakers/vector-3.png"
          />
        ))} 

      {/* Section Heading */}
      <h1 className="relative z-10 text-white text-4xl md:text-5xl text-center font-black font-cinzel mb-12">
        Our SPEAKERS
      </h1>

     {/* Speaker Cards */}
<div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-y-10 gap-x-4 px-4 place-items-center">
  {speakers.map((speaker) => (
    <Card
      key={speaker.id}
      className="relative bg-[#591303] rounded-xl overflow-hidden w-full max-w-[180px] mx-auto"
      
    >
   <CardContent className="p-0 relative h-60 bg-[url('/-pngtree-closeup-of-textured-vintage-beige-15570655-1.png')] bg-cover bg-center flex items-center justify-center">
  {/* Vector overlay behind speaker */}
  <img
    src="/speakers/vector-1.png"
    alt="Vector Behind"
    className="absolute w-full h-full object-cover z-0"
  />

  {/* Speaker Image (3/4 height) */}
  <img
    src={speaker.imageUrl}
    alt={speaker.name}
    className="relative z-20 h-95% object-contain"
  />

</CardContent>


      {/* Speaker Text */}
      <div className="absolute bottom-3 w-full text-center text-white z-20">
        <p className="font-black text-sm">{speaker.name}</p>
        <p className="text-[10px]">{speaker.role}</p>
      </div>
    </Card>
  ))}
</div>
    </section>
  );
};
