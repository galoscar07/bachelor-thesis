class LoaderException(Exception):
    def __init__(self, message):
        if message:
            new_message = "Loader Error: " + message
            super(LoaderException, self).__init__(new_message)
        else:
            message = "Something went wrong when loading the text. No message was provided!"
            super(LoaderException, self).__init__(message)