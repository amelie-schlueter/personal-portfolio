import EntryWrapper from "@/components/journal/EntryWrapper";
import Footer from "@/components/layout/Footer";
import Grid from "@/components/layout/Grid";
import Link from "next/link";
import React from "react";

const imprint = () => {
  return (
    <div className=" container px-4 mx-auto w-full relative my-12 md:mt-24">
      <EntryWrapper>
        <h1 className="text-xl font-medium">Imprint</h1>
        <div className="flex flex-col gap-10 mt-10">
          <div>
            <h4 className=" mb-2">Information according to German §5 of TMG</h4>
            <p className=" max-w-md">
              <span className="text-base font-medium">Amelie Schlüter</span>
              <br />
              Sebaldplatz 7 <br />
              73525 Schwäbisch Gmünd <br />
              Germany <br />
              <span className="text-base font-medium ">
                <Link
                  href={"mailto:as@amelieschlueter.com"}
                  className="underline m-0 p-0"
                >
                  as@amelieschlueter.com
                </Link>
              </span>
            </p>
            <h4 className="mb-2 mt-10">
              Information Copyright and internal content
            </h4>
            <p className="  ">
              The material and content on this website are protected under the
              copyright laws of Germany. Unless explicitly allowed by law
              (specifically § 44a and following of the copyright law), all forms
              of use, duplication, or manipulation of copyrighted works on this
              website necessitate my prior consent. Individual copies of a work
              are only permissible for private, non-commercial use and must not
              be used for direct or indirect financial gain. Unauthorized use of
              copyrighted material is subject to legal penalties (§ 106 of the
              copyright law).
            </p>
            <p className="  mt-4 ">
              I cannot assure the absolute accuracy, completeness, or
              currentness of the contents. As stipulated by legal provisions, I
              am responsible for the content I create. It's important to note
              that I am not obligated to monitor third-party information
              provided or stored on my website, nor am I required to search for
              circumstances that might indicate illicit activities. My
              responsibilities to remove or block the usage of information under
              universally binding legal standards remain unaltered by this, as
              outlined in §§ 8 to 10 of the Telemedia Act (TMG).
            </p>
          </div>
        </div>
        <Footer />
      </EntryWrapper>
    </div>
  );
};

export default imprint;
