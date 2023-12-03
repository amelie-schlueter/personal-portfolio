import Navbar from "@/components/Navbar";
import Projectcard from "@/components/Projectcard";
import TabsComponent from "@/components/Tabs";
import Topbar from "@/components/Topbar";
import { projects } from "@/lib/data";
import React from "react";

const Page = () => {
  return (
    <div className="container py-24">
      {/* <h1 className="text-4xl font-medium">Work</h1>
       */}

      <section className="w-full  " id="work">
        <div className="flex flex-col md:grid md:grid-cols-[1fr,1.25fr]  h-full">
          {/*Header*/}
          <div className="w-full gap-4 flex flex-col mb-8 md:sticky md:top-10 h-fit max-w-sm">
            <h2 className="text-4xl font-medium">Work</h2>
            <p className="text-muted-foreground">
              Explore some selected work i have done in the past.
            </p>
          </div>
          {/*Project Card Wrapper*/}
          {/*Project Card*/}

          {projects.map((project) => (
            <Projectcard project={project} key={project.slug} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Page;
