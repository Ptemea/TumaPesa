import { Stack, useRouter} from "expo-router";

const Layout = () => {
    const router = useRouter();
    
    return (
      <Stack>
        <Stack.Screen
          name="Profile"
          options={{
            headerLeft: () => (
              <Button onPress={() => router.back()} title="Back" />
            ),
          }}
        />
        {}
      </Stack>
    );
  };
  export default Layout;