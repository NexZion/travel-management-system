import 'package:flutter/material.dart';

import 'src/auth/auth_shell.dart';
import 'src/theme/xplore_theme.dart';

void main() {
  runApp(const XploreAuthApp());
}

class XploreAuthApp extends StatelessWidget {
  const XploreAuthApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Xplore',
      debugShowCheckedModeBanner: false,
      themeMode: ThemeMode.system,
      theme: XploreTheme.light(),
      darkTheme: XploreTheme.dark(),
      home: const AuthShell(),
    );
  }
}
