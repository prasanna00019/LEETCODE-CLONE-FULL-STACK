import { Box, Button, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react'
import React from 'react'
import {LANGUAGE_VERSIONS} from '../constant.js'
const languages=Object.entries(LANGUAGE_VERSIONS);
const LanguageSelector = ({Language,onSelect}) => {
  return (
   <Box m={1} mb={1} className='flex gap-2 items-center'>
    <Text mb={2} fontSize='lg'>Language: </Text>
    <Menu isLazy>
  <MenuButton as={Button} >
   {Language}
  </MenuButton>
  <MenuList bg={'#ffffff'}>
   {
    languages.map(([lang,version])=>(
        <MenuItem key={lang} 
        color={
            lang===Language?"blue.400":""
        }
        bg={
            lang===Language?"gray.700":"transparent"
        }
        _hover={{
            color:"green.600",
            bg:"gray.800"
        }
        }
        onClick={()=>onSelect(lang)}>
        {lang}
        &nbsp;
         <Text as='span' color='black.600' fontSize='sm'>
            {version}
            </Text>   
        </MenuItem>
    ))}
  </MenuList>
</Menu>
   </Box>
  )
}

export default LanguageSelector
