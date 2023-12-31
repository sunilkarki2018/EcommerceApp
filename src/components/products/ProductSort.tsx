import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

interface Props {
  onSort: (value: string) => void;
}

export default function ProductSort({ onSort }: Props) {
  const [value, setValue] = React.useState("def");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
    onSort((event.target as HTMLInputElement).value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-controlled-radio-buttons-group">
        Sort by Price
      </FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        name="controlled-radio-buttons-group"
        value={value}
        onChange={handleChange}
      >
        <FormControlLabel value="def" control={<Radio />} label="Default" />
        <FormControlLabel value="asc" control={<Radio />} label="Asc" />
        <FormControlLabel value="desc" control={<Radio />} label="Desc" />
      </RadioGroup>
    </FormControl>
  );
}
