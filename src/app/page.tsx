import { ModeToggle } from "@/components/Mode-toggle";
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Briefcase, SplitSquareHorizontalIcon, Workflow } from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import BlogEntryCard from "@/components/BlogEntryCard";
import Footer from "@/components/Footer";
import { allDocs } from "contentlayer/generated";
import { notFound } from "next/navigation";

export default function Home() {
  const docs = allDocs;
  return (
    <div className="container w-full items-center relative">
      <Topbar />

      <Navbar />
      {/*Wrapepr*/}
      <div className="flex flex-col h-[35rem] items-start justify-center gap-10 md:grid md:grid-cols-2 md:items-center  md:h-full md:py-20  ">
        {/*Hero*/}
        <div className="max-w-md">
          <div className="mb-6 text-4xl">
            <h1 className="font-medium">Hi, I'm Amelie</h1>
            <h1 className="font-medium">a Designer & Developer</h1>
          </div>
          <p className="text-muted-foreground max-w-xl ">
            I'm Amelie an Interaction Design student at HFG Schwäbisch Gmuend,
            and I'm passionate about using user-centered functional design to
            solve real-world problems.
          </p>
          <div className="mt-6">
            <Button>Let's connect</Button>
          </div>
        </div>
        <div className="w-full flex md:items-start md:justify-start ">
          <Button variant={"outline"} className="gap-2">
            <Briefcase strokeWidth={1.5} size={22} />
            Working
            <span>
              <a href="https://zwoeins.de">@zwoeins</a>
            </span>
          </Button>
        </div>
      </div>

      {/*My Work*/}
      <section className="w-full my-10" id="work">
        <div className="flex flex-col md:grid md:grid-cols-[2fr,2fr]  h-full">
          {/*Header*/}
          <div className="w-full mb-8 md:sticky md:top-10 h-fit">
            <p className="text-muted-foreground font-">Cases</p>
            <h2 className="text-3xl font-medium">My Work</h2>
          </div>
          {/*Project Card Wrapper*/}
          {/*Project Card*/}
          <div className="col-start-2 mb-24 ">
            <div className="flex flex-col gap-6 item-center justify-between w-full ">
              <div className="w-full flex flex-col gap-2 max-w-sm">
                <h3 className="text-xl font-medium">Premium Room Design</h3>
                <p className="text-muted-foreground text-sm  w-full">
                  Culpa adipisicing tempor aliquip non non esse velit non nisi
                  magna consectetur. Laborum duis minim sit nisi.
                </p>
              </div>

              {/*Badges*/}
              <div className="flex item-center gap-3">
                {/*Tags*/}
                <div>
                  <Badge variant={"green"}>Design</Badge>
                </div>

                {/*Time*/}
                <div>
                  <Badge variant={"outline"}>2022</Badge>
                </div>
              </div>
              {/*Image*/}
            </div>
            {/*Image*/}
            <div className="mt-10">
              <Image
                src={"/premium-room-design.png"}
                className="rounded-lg"
                width={2605}
                height={1618}
                alt="premium-room-design-cover-image"
              ></Image>
            </div>
          </div>
          <div className="col-start-2 mb-24 ">
            <div className="flex flex-col gap-6 item-center justify-between w-full ">
              <div className="w-full flex flex-col gap-2 max-w-sm">
                <h3 className="text-xl font-medium">Premium Room Design</h3>
                <p className="text-muted-foreground text-sm  w-full">
                  Culpa adipisicing tempor aliquip non non esse velit non nisi
                  magna consectetur. Laborum duis minim sit nisi.
                </p>
              </div>

              {/*Badges*/}
              <div className="flex item-center gap-3">
                {/*Tags*/}
                <div>
                  <Badge variant={"green"}>Design</Badge>
                </div>

                {/*Time*/}
                <div>
                  <Badge variant={"outline"}>2022</Badge>
                </div>
              </div>
              {/*Image*/}
            </div>
            {/*Image*/}
            <div className="mt-10">
              <Image
                src={"/premium-room-design.png"}
                className="rounded-lg"
                width={2605}
                height={1618}
                alt="premium-room-design-cover-image"
              ></Image>
            </div>
          </div>
        </div>
      </section>

      {/*What i do*/}

      {/*Thoughts*/}
      <section
        className="py-10 h-full w-full relative "
        aria-label="journal-section"
      >
        <div className="w-full">
          <div className="w-full grid  gap-6 md:grid-cols-[1.25fr,2fr] md:gap-24">
            <div className="flex flex-col gap-6 md:sticky md:top-10 h-fit">
              <h3 className="text-3xl font-medium md:max-w-xs">
                "Writing makes you a better designer"
              </h3>
              <div>
                <Button variant={"outline"}>More Thoughts</Button>
              </div>
            </div>

            {/*Blog Wrapper*/}
            <div className="flex flex-col gap-16">
              {/*Blog Entry*/}
              {docs && docs.map((doc) => <BlogEntryCard doc={doc} />)}
            </div>
          </div>

          {/* Footer */}
        </div>
      </section>
      <Footer />
      <div className="h-screen"></div>
    </div>
  );
}
