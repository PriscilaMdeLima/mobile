import { View, Switch, ScrollView, Text } from 'react-native';
import { useState } from 'react';

const [modoNoturno, setModoNoturno] = useState(false);
<ScrollView>
    <Switch value={modoNoturno} onValueChange={setModoNoturno} />
    <Text>Lista de notícias...</Text>
</ScrollView>;