import { Card, Modal } from "@/components";
import { useState } from "react";

interface ApprasialFormProps {}

export const ApprasialForm: React.FC<ApprasialFormProps> = ({}) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <>
      <Card color="blue" className="p-5 md:p-10">
        <h4 className="text-2xl font-bold mb-4">Request An Apprasial</h4>
        <p className="opacity-70 mb-6 pr-0 md:pr-24">
          Don&apos;t miss out on your dream home - start your search today!
        </p>
        <div className="md:flex gap-2">
          <input
            type="text"
            id="address"
            placeholder="Street Address"
            className="p-4 grow border border-gray-100 rounded-lg text-gray-900 placeholder:opacity-40 w-full md:w-auto"
          />
          <button
            className="px-6 py-4 rounded-lg bg-slate-900 mt-4 md:mt-0"
            onClick={() => setDialogOpen(true)}
          >
            Request appraisal
          </button>
        </div>
      </Card>

      <Modal
        state={dialogOpen}
        setState={setDialogOpen}
        color="blue"
        className="p-10"
      >
        <h1>TEST dialog</h1>
        <button onClick={() => setDialogOpen(false)}>close</button>
      </Modal>
    </>
  );
};
