import { Button, StyleSheet, Text, View } from "react-native";
import useCheckAppVersion from "../../hooks/useCheckAppVersion";

const HomeScreen = () => {
  const { version, onCheckVersion } = useCheckAppVersion()
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen Updated</Text>
      <Text style={styles.version}>Version: {version}</Text>
      <Button title="Check Version Update" onPress={onCheckVersion} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 24,
  },
  version: {
    marginBottom: 20,
  }
});

export default HomeScreen;