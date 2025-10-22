import { ChangeEvent } from "react";
import { Car } from "../types";
import { DialogContent, TextField, Stack } from "@mui/material";

type CarDialogFormprops = {
  car: Car;
  handleChange: (event: ChangeEvent<HTMLInputElement>) => void;

}

function CarDialogContent({car, handleChange} : CarDialogFormprops) {
  return (
    <>
      <DialogContent>
        <Stack spacing={2} mt={1}>
          <TextField name="Brand" value={car.brand} onChange={handleChange} />{" "}
          <br />
          <TextField
            label="Model"
            type="text"
            name="model"
            value={car.model}
            onChange={handleChange}
          />{" "}
          <br />
          <TextField
            label="Color"
            type="text"
            name="color"
            value={car.color}
            onChange={handleChange}
          />{" "}
          <br />
          <TextField
            label="RegistrationNumber"
            type="text"
            name="registrationNumber"
            value={car.registrationNumber}
            onChange={handleChange}
          />{" "}
          <br />
          <TextField
            label="ModelYear"
            type="text"
            name="modelYear"
            value={car.modelYear}
            onChange={handleChange}
          />{" "}
          <br />
          <TextField
            label="Price"
            type="text"
            name="price"
            value={car.price}
            onChange={handleChange}
          />{" "}
          <br />
        </Stack>
      </DialogContent>
    </>
  );
}

export default CarDialogContent;

