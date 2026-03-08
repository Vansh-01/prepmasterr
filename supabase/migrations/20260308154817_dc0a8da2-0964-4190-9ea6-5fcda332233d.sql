
-- Tighten the INSERT policy to only allow inserts for authenticated context
DROP POLICY "System can insert notifications" ON public.notifications;
CREATE POLICY "Triggers can insert notifications"
  ON public.notifications FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);
