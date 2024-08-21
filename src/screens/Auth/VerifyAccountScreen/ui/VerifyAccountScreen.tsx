import { paths } from "@/shared/config/routes";
import { Button, Input, Text, TouchableOpacity } from "@/shared/ui";
import { router } from "expo-router";
import { createRef, FC, useRef, useState } from "react";
import { View } from "react-native";

interface IProps {}

const VerifyAccountScreen: FC<IProps> = ({}) => {
    const [code, setCode] = useState(new Array(4).fill(""));

    const inputs = useRef<any>([...Array(4)].map(() => createRef<string>()));

    const handleInput = (text: string, index: number) => {
        const newCode = [...code];
        newCode[index] = text;
        setCode(newCode);

        if (text && index < 3) {
            inputs.current[index + 1].current.focus();
        }
        if (text === "" && index > 0) {
            inputs.current[index - 1].current.focus();
        }
    };

    return (
      <View className="flex-1 items-center justify-center p-5 bg-white">
        <Text className="text-[22px] font-bold mb-[10]">Verification Code</Text>
        <Text className="text-center text-base font-raleway text-font-description mb-5">
          We have sent the verification code to your email address
        </Text>
        <View className="flex-row mb-5">
          {code.length &&
            code.map((_, index) => {
              return (
                <Input
                  key={index}
                  className="w-[60px] h-[60px] border-[1px] border-input text-center mr-[10px] text-[20px]"
                  keyboardType="number-pad"
                  maxLength={1}
                  onChangeText={(text) => handleInput(text, index)}
                  value={code[index]}
                  ref={inputs.current[index]}
                  autoFocus={index === 0}
                />
              );
            })}
        </View>
        <Button
          variant="primary"
          className="mt-[40px]"
          width="70%"
          onPress={() => router.push(paths.welcomeIntro())}
        >
          <Text className="font-nunito">Submit</Text>
        </Button>
        <TouchableOpacity
          onPress={() => router.back()}
          className="mx-4 text-xl mt-4 self-center"
        >
          <Text className="font-nunito-bold">Go back to sing up</Text>
        </TouchableOpacity>
      </View>
    );
};

export default VerifyAccountScreen;
