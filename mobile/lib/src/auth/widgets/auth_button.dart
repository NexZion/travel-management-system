import 'package:flutter/material.dart';

class AuthButton extends StatelessWidget {
  const AuthButton({
    required this.label,
    required this.loadingLabel,
    required this.isLoading,
    required this.onPressed,
    super.key,
  });

  final String label;
  final String loadingLabel;
  final bool isLoading;
  final VoidCallback onPressed;

  @override
  Widget build(BuildContext context) {
    return FilledButton(
      onPressed: isLoading ? null : onPressed,
      child: AnimatedSwitcher(
        duration: const Duration(milliseconds: 220),
        child: isLoading
            ? Row(
                key: const ValueKey('loading'),
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const SizedBox.square(
                    dimension: 18,
                    child: CircularProgressIndicator(strokeWidth: 2),
                  ),
                  const SizedBox(width: 10),
                  Text(loadingLabel.toUpperCase()),
                ],
              )
            : Row(
                key: const ValueKey('ready'),
                mainAxisAlignment: MainAxisAlignment.center,
                children: [
                  const Icon(Icons.explore_rounded, size: 18),
                  const SizedBox(width: 8),
                  Text(label.toUpperCase()),
                ],
              ),
      ),
    );
  }
}
