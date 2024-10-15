import DylanHeadshot from "@/assets/DylanHeadshot.png";

const Profile = () => {
  return (
    <section id="profile" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      <div
        className={`mx-auto mt-12 grid w-5/6 grid-cols-1 gap-16 md:grid-cols-2`}
      >
        <div>
          <img alt="dylan-headshot" src={DylanHeadshot}></img>
        </div>
        <div className="flex w-[90%] flex-col justify-center gap-4 text-sm">
          <div className="gap-1">
            <p className="text-6xl">Dylan Brown</p>
            <p className="text-2xl underline">Software Development Engineer</p>
          </div>
          <p>
            Experienced Software Development Engineer with 5+ years of
            experience developing large-scale, production-quality software
            solutions and 1.5 years of experience leading and managing software
            development teams. Full stack experience delivering iOS mobile
            applications, web applications, and backend systems to support
            various industries including transportation and food production.
          </p>
          <p>
            Highly skilled in system design, people management, and project
            management. Proficient in Java, Typescript, Python, Swift (ObjC),
            and React. Extensive experience with AWS products (ECS, Lambda, DDB,
            Amplify, etc.), CI/CD concepts including pipeline solutions, and
            software scaling.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Profile;
