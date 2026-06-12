import 'package:flutter/material.dart';

import 'auth_models.dart';
import 'login_screen.dart';
import 'register_screen.dart';

class AuthShell extends StatefulWidget {
  const AuthShell({super.key});

  @override
  State<AuthShell> createState() => _AuthShellState();
}

class _AuthShellState extends State<AuthShell> {
  AuthMode _mode = AuthMode.login;

  void _showLogin() => setState(() => _mode = AuthMode.login);
  void _showRegister() => setState(() => _mode = AuthMode.register);

  @override
  Widget build(BuildContext context) {
    return AnimatedSwitcher(
      duration: const Duration(milliseconds: 360),
      switchInCurve: Curves.easeOutCubic,
      switchOutCurve: Curves.easeInCubic,
      child: _mode == AuthMode.login
          ? LoginScreen(
              key: const ValueKey('login'),
              onCreateAccount: _showRegister,
            )
          : RegisterScreen(
              key: const ValueKey('register'),
              onSignIn: _showLogin,
            ),
    );
  }
}
