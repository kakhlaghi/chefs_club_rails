Rails.application.config.middleware.use OmniAuth::Builder do
  provider :github, 'c2bfec121283821adffa', '6b0316972cf71fcb10a72970ff54defb1fc35ae3', scope: "user:email,user:follow"
end
