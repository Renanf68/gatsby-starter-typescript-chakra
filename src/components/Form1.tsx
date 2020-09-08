import React, { useState } from "react"
import {
  FormControl,
  RadioGroup,
  Radio,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/core"

const Form1: React.FC = () => {
  const [value, setValue] = useState("1")
  return (
    <form>
      <FormControl as="fieldset">
        <RadioGroup
          onChange={e => setValue(e.target.value)}
          value={value}
          display="flex"
          flexDirection="row"
          justifyContent="space-around"
        >
          <Radio value="1">Option 1</Radio>
          <Radio value="2">Option 2</Radio>
          <Radio value="3">Option 3</Radio>
        </RadioGroup>
      </FormControl>
      <FormControl
        display="flex"
        flexDirection={["column", "row"]}
        alignItems="flex-end"
        mt="1rem"
      >
        <FormControl w="100%">
          <FormLabel htmlFor="name">Name</FormLabel>
          <Input id="name" placeholder="Name" />
        </FormControl>
        <FormControl
          w="100%"
          mt={["1rem", "0"]}
          ml={["0", "0.4rem"]}
          isRequired
        >
          <FormLabel htmlFor="last">Last Name</FormLabel>
          <Input id="last" placeholder="Last Name" />
        </FormControl>
        <Button
          mt={["1rem", "0"]}
          ml={["0", "0.4rem"]}
          w="100%"
          maxW={["100%", "10rem"]}
          variantColor="teal"
          type="button"
        >
          Go!
        </Button>
      </FormControl>
    </form>
  )
}

export default Form1
