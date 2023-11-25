import pyttsx3
import datetime
import speech_recognition as sr
import wikipedia
import webbrowser
import os 
engine=pyttsx3.init('sapi5')
voices=engine.getProperty('voices')
#print(voices[1].id)
engine.setProperty('voice',voices[1].id)#for th female voice 
def speak(audio):
    engine.say(audio)
    engine.runAndWait()
def wishMe():
    hour=int(datetime.datetime.now().hour)
    if hour>=0 and hour<12:
        speak("Good Morning ")

    elif hour>=12 and hour<18:
        speak("Good afternoon")
    else:
        speak("good Evening Mam")
    speak("I am Jarvis .Please tell me how can i help you")
def takeCommand():
    #it takes microphone inout from the user and return string output 
   r=sr.Recognizer()
   with sr.Microphone() as source:
    print ("listening....")
    r.pause_threshold=1
    r.energy_threshold=100
    audio=r.listen(source)
    try:
        print("Recognizing....")
        query=r.recognize_google(audio,language='en-in')
        print(f"user said:{query}\n")
    except Exception as e:
        # print(e)

        print("say that again please")
        return "None"
    return query    
if __name__=="__main__":
    wishMe()
    if 1:
          query=takeCommand().lower()
          if 'wikipedia' in query:
            speak('Searching Wikipedia...')
            query=query.replace("wikipedia","")
            results=wikipedia.summary(query,sentences =2)
            speak("According to Wikipedia")
            print(results)
            speak(results)
           
          elif'open youtube' in query:
                 webbrowser.open("youtube.com")
          elif 'open google' in query:
            webbrowser.open("google.com")
          elif'open stackoverflow' in query:
            webbrowser.open('stackoverflow.com')
          
          elif'play music' in query:
                music_dir='D:\\non Critical\\songs\\Favorite Songs2'
                songs=os.listdir(music_dir)
                print(songs)
                os.startfile(os.path.join(music_dir,songs[0]))
          elif 'the time'in query:
                 strTime=datetime.datetime.now().strftime("%H:%M:%S")
                 speak(f"Mam,the time is (strtime)")