import React from "react";
import { Button, Container, TextField } from "@mui/material";
import { FiPhoneCall, FiSend, FiMapPin } from "react-icons/fi";
import { styled } from "@mui/material/styles";

const CssTextField = styled(TextField)({
  "& label": {
    color: "#999",
  },
  "& label.Mui-focused": {
    color: "white",
  },
  "& .MuiOutlinedInput-root": {
    "& input": {
      color: "white",
    },
    "& fieldset": {
      borderColor: "#999",
    },
    "&:hover fieldset": {
      borderColor: "#999",
      color: "white",
    },
    "&.Mui-focused fieldset": {
      borderColor: "white",
    },
  },
});

const sendmsn = () => {
  alert("Please contact me by phone number.");
};

function Contact() {
  return (
    <div className="w-full h-full pt-10 bg-zinc-800 text-neutral-200">
      <Container>
        <div className="flex justify-between text-sky-600 mb-3">
          <h1>Contact.</h1>
          <FiPhoneCall size={42} className="my-auto" />
        </div>
        <hr className="border-b border-dashed border-zinc-600" />

        {/* //text head */}
        <div className="my-16">
          <h2 className="text-center text-under-line uppercase">let's talk</h2>
        </div>

        {/* //content 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 px-0 lg:px-32 gap-10">
          <CssTextField type="text" name="name" label="Name" />
          <CssTextField type="email" name="email" label="Email" />
          <CssTextField
            inputProps={{ style: { color: "white" } }}
            type="text"
            name="message"
            label="Message"
            multiline
            className="col-span-1 md:col-span-2"
            rows={4}
          />
          <div className="col-span-1 md:col-span-2 flex justify-center">
            <Button variant="outlined" onClick={() => sendmsn()}>
              SEND MESSAGE
            </Button>
          </div>
        </div>

        {/* //content 2 */}

        <div className="my-20 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center">
            <FiSend className="mx-auto mb-2 text-sky-600" size={42} />
            <h4>pongsakan.o@hotmail.com</h4>
          </div>
          <div className="text-center">
            <FiMapPin className="mx-auto mb-2 text-sky-600" size={42} />
            <h4>467 M.5 Samutprakan, TH</h4>
          </div>
          <div className="text-center">
            <FiPhoneCall className="mx-auto mb-2 text-sky-600" size={42} />
            <h4>(+66) 96 884 5847</h4>
          </div>
        </div>
      </Container>
      <div className="my-0 w-full bg-sky-400 brightness-50">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d969.6556643909202!2d100.61359269094018!3d13.558724343248466!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sth!2sth!4v1676351270764!5m2!1sth!2sth"
          width="100%"
          height="250"
          frameborder="0"
          filter="brightness(50%)"
          style={{ border: 0 }}
          aria-hidden="false"
          tabIndex="0"
          allowFullScreen
          title="ggmap"
        />
      </div>
    </div>
  );
}

export default Contact;
