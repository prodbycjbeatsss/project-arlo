import React from 'react';
import {
  Animated,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const COLORS = {
  background: 'rgb(246, 243, 237)',
  text: 'rgb(35, 35, 32)',
  secondaryText: 'rgb(126, 123, 116)',
  tertiaryText: 'rgb(163, 159, 151)',
  accent: 'rgb(91, 142, 153)',
  divider: 'rgba(35, 35, 32, 0.075)',
};

type ArloState =
  | 'idle'
  | 'thinking'
  | 'writing'
  | 'needs-context';

type Task = {
  id: string;
  title: string;
  arloState: ArloState;
};

const SAMPLE_TASKS: Task[] = [
  {
    id: '1',
    title: 'Finish video',
    arloState: 'idle',
  },
  {
    id: '2',
    title: 'Go shopping',
    arloState: 'needs-context',
  },
  {
    id: '3',
    title: 'Clean living room',
    arloState: 'idle',
  },
  {
    id: '4',
    title:
      "Ring Mom at 4:00 PM to talk about the wedding and ask whether everyone is still going to Nando's afterwards",
    arloState: 'thinking',
  },
];

function ArloQuestionBullet() {
  const opacity = React.useRef(
    new Animated.Value(0.45),
  ).current;

  React.useEffect(() => {
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(opacity, {
          toValue: 1,
          duration: 900,
          useNativeDriver: true,
        }),
        Animated.timing(opacity, {
          toValue: 0.45,
          duration: 900,
          useNativeDriver: true,
        }),
      ]),
    );

    animation.start();

    return () => {
      animation.stop();
    };
  }, [opacity]);

  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel="Arlo has questions about this task"
      hitSlop={10}
      style={({ pressed }) => [
        styles.arloQuestionButton,
        pressed && styles.arloQuestionButtonPressed,
      ]}
    >
      <Animated.View
        style={[
          styles.arloQuestionBullet,
          { opacity },
        ]}
      />
    </Pressable>
  );
}

function ArloStatus({
  state,
}: {
  state: ArloState;
}) {
  if (state === 'thinking' || state === 'writing') {
    return (
      <View
        accessible
        accessibilityLabel={`Arlo is ${state}`}
        style={styles.status}
      >
        <Text style={styles.statusText}>
          {state}…
        </Text>
      </View>
    );
  }

  return null;
}

function TaskItem({
  task,
}: {
  task: Task;
}) {
  return (
    <View style={styles.task}>
      <View style={styles.taskContent}>
        <View style={styles.taskTitleArea}>
          {task.arloState === 'needs-context' ? (
            <ArloQuestionBullet />
          ) : (
            <View style={styles.staticBullet} />
          )}

          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={styles.taskTitle}
          >
            {task.title}
          </Text>
        </View>

        <View style={styles.statusArea}>
          <ArloStatus state={task.arloState} />
        </View>
      </View>

      <View style={styles.rule} />
    </View>
  );
}

export default function Home() {
  const [text, setText] = React.useState('');
  const inputRef = React.useRef<TextInput>(null);

  React.useEffect(() => {
    const focusTimer = setTimeout(() => {
      inputRef.current?.focus();
    }, 100);

    return () => {
      clearTimeout(focusTimer);
    };
  }, []);

  return (
    <SafeAreaView
      style={styles.safeArea}
      edges={['top', 'bottom']}
    >
      <KeyboardAvoidingView
        style={styles.screen}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.header}>
            <View style={styles.todayPill}>
              <Text style={styles.todayText}>
                Today
              </Text>
            </View>

            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Settings"
              hitSlop={10}
              style={({ pressed }) => [
                styles.settingsButton,
                pressed && styles.settingsButtonPressed,
              ]}
            >
              <View style={styles.settingsDot} />
              <View style={styles.settingsDot} />
              <View style={styles.settingsDot} />
            </Pressable>
          </View>

          <View style={styles.taskArea}>
            {SAMPLE_TASKS.map((task) => (
              <TaskItem
                key={task.id}
                task={task}
              />
            ))}

            <View style={styles.composer}>
              <TextInput
                ref={inputRef}
                value={text}
                onChangeText={setText}
                placeholder="What needs doing..."
                placeholderTextColor={COLORS.tertiaryText}
                multiline
                maxLength={500}
                style={styles.input}
                accessibilityLabel="What needs doing"
                returnKeyType="done"
                blurOnSubmit={false}
              />
            </View>
          </View>

          <View style={styles.completedSection}>
            <Text style={styles.completedText}>
              Completed 3
            </Text>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  screen: {
    flex: 1,
    backgroundColor: COLORS.background,
  },

  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 8,
    paddingBottom: 48,
  },

  header: {
    minHeight: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  todayPill: {
    paddingHorizontal: 12,
    paddingVertical: 7,
    borderRadius: 999,
    backgroundColor: 'rgba(35, 35, 32, 0.045)',
  },

  todayText: {
    color: COLORS.secondaryText,
    fontSize: 13,
    fontWeight: '500',
    letterSpacing: -0.1,
  },

  settingsButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 2,
  },

  settingsButtonPressed: {
    backgroundColor: 'rgba(35, 35, 32, 0.05)',
  },

  settingsDot: {
    width: 3,
    height: 3,
    borderRadius: 1.5,
    backgroundColor: COLORS.secondaryText,
  },

  taskArea: {
    marginTop: 28,
  },

  task: {
    marginBottom: 0,
  },

  taskContent: {
    minHeight: 34,
    flexDirection: 'row',
    alignItems: 'center',
  },

  taskTitleArea: {
    flex: 1,
    minWidth: 0,
    flexDirection: 'row',
    alignItems: 'center',
  },

  taskTitle: {
    flex: 1,
    minWidth: 0,
    paddingRight: 16,
    color: COLORS.text,
    fontSize: 13,
    lineHeight: 19,
    fontWeight: '500',
    letterSpacing: -0.1,
  },

  staticBullet: {
    width: 4,
    height: 4,
    marginRight: 9,
    borderRadius: 2,
    backgroundColor: COLORS.tertiaryText,
    opacity: 0.7,
  },

  arloQuestionButton: {
    width: 13,
    height: 22,
    marginRight: 5,
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  arloQuestionButtonPressed: {
    opacity: 0.5,
  },

  arloQuestionBullet: {
    width: 5,
    height: 5,
    borderRadius: 2.5,
    backgroundColor: COLORS.accent,
  },

  statusArea: {
    width: 82,
    minHeight: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },

  status: {
    flexDirection: 'row',
    alignItems: 'center',
    minHeight: 20,
  },

  statusText: {
    color: COLORS.secondaryText,
    fontSize: 12,
    lineHeight: 18,
    fontWeight: '400',
    letterSpacing: -0.1,
  },

  rule: {
    height: StyleSheet.hairlineWidth,
    backgroundColor: COLORS.divider,
  },

  composer: {
    minHeight: 34,
    marginTop: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  input: {
    flex: 1,
    minHeight: 22,
    margin: 0,
    padding: 0,
    color: COLORS.text,
    fontSize: 13,
    lineHeight: 19,
    fontWeight: '400',
    letterSpacing: -0.1,
  },

  completedSection: {
    marginTop: 18,
    paddingTop: 18,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: COLORS.divider,
  },

  completedText: {
    color: COLORS.secondaryText,
    fontSize: 13,
    lineHeight: 19,
    fontWeight: '500',
    letterSpacing: -0.1,
  },
});